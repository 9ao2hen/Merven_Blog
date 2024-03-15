# Spring Security：升级已弃用的 WebSecurityConfigurerAdapter

## 1、概览

Spring Security 允许通过继承 `WebSecurityConfigurerAdapter` 类来自定义 HTTP Security，例如端点授权或 Authentication Manager 配置。然而，在最近的版本中，Spring 已经弃用了这种方法，并推荐使用基于组件的 security 配置。

本文将会带你学习如何在 Spring Boot 应用中代替这些已废弃的方法。

## 2、Spring Security Without the WebSecurityConfigurerAdapter
常见的 Spring HTTP Security 配置类都会继承一个 `WebSecurityConfigureAdapter` 类。

从 5.7.0-M2 `起，WebSecurityConfigureAdapter` 被废弃了，不推荐使用。

创建一个基于内存验证的 Spring Boot 应用示例来演示如何进行新的配置。

首先，定义配置类：
```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class SecurityConfig {

    // config

}
```
添加 Method Security 注解，根据不同角色进行处理。

### 2.1、配置 Authentication
使用 `WebSecurityConfigureAdapter` 时，使用 `AuthenticationManagerBuilder` 来设置 Authentication Context。

现在，可以定义一个 `UserDetailsManager` 或 `UserDetailsService` 来避免组件过时的问题：

```java
@Bean
public UserDetailsService userDetailsService(BCryptPasswordEncoder bCryptPasswordEncoder) {
    InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
    manager.createUser(User.withUsername("user")
      .password(bCryptPasswordEncoder.encode("userPass"))
      .roles("USER")
      .build());
    manager.createUser(User.withUsername("admin")
      .password(bCryptPasswordEncoder.encode("adminPass"))
      .roles("USER", "ADMIN")
      .build());
    return manager;
}
```

或者，鉴于 `UserDetailService，甚至可以设置一个` `AuthenticationManager`：

```java
@Bean
public AuthenticationManager authenticationManager(HttpSecurity http, BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailService userDetailService) 
  throws Exception {
    return http.getSharedObject(AuthenticationManagerBuilder.class)
      .userDetailsService(userDetailsService)
      .passwordEncoder(bCryptPasswordEncoder)
      .and()
      .build();
}

```
同样，如果使用 JDBC 或 LDAP 身份认证，这也会起作用。

### 2.2 配置 HTTP Security
如果想避免 HTTP Security 方面的弃用警告，可以创建一个 `SecurityFilterChain` Bean。

例如，假设我们想根据角色来保护端点。登录端点是可匿名访问的，删除端点只有 `ADMIN` 可以访问。

使用 Basic Authentication：

```java
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
      .authorizeHttpRequests(authorizationManagerRequestMatcherRegistry ->
              authorizationManagerRequestMatcherRegistry.requestMatchers(HttpMethod.DELETE).hasRole("ADMIN")
                      .requestMatchers("/admin/**").hasAnyRole("ADMIN")
                      .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN")
                      .requestMatchers("/login/**").permitAll()
                      .anyRequest().authenticated())
      .httpBasic(Customizer.withDefaults())
      .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

    return http.build();
}
```
HTTP Security 将构建一个 `DefaultSecurityFilterChain` 对象，用于加载 Request Matcher 和 Flter。

### 2.3 配置 Web Security
对于 Web security，现在可以使用回调接口 `WebSecurityCustomizer。`
打开 `debug` ，并忽略图片和脚本资源等一些路径，

```java
@Bean
public WebSecurityCustomizer webSecurityCustomizer() {
    return web -> web.debug(securityDebug).ignoring().requestMatchers("/css/**", "/js/**", "/img/**", "/lib/**", "/favicon.ico");
}
```
## 3 Endpoints Controller
现在，为应用定义一个简单的 REST controller：
```java
@RestController
public class ResourceController {
    @GetMapping("/login")
    public String loginEndpoint() {
        return "Login!";
    }

    @GetMapping("/admin")
    public String adminEndpoint() {
        return "Admin!";
    }

    @GetMapping("/user")
    public String userEndpoint() {
        return "User!";
    }

    @GetMapping("/all")
    public String allRolesEndpoint() {
        return "All Roles!";
    }

    @DeleteMapping("/delete")
    public String deleteEndpoint(@RequestBody String s) {
        return "I am deleting " + s;
    }
}
```
正如之前在定义 HTTP Security 时提到的，我们要添加一个任何人都能访问的通用 `/login` 端点、针对 `ADMIN` 和 `USER` 的特定端点，以及一个不鉴权角色但仍需要身份认证的 `/all` 端点。

## 4 测试端点
将新配置添加到 Spring Boot Test 中，使用 MVC mock 来测试端点。

### 4.1 测试匿名用户

匿名用户可以访问 `/login` 端点。如果尝试访问其他内容，则会出现 Unauthorized （401）：
```java
@Test
@WithAnonymousUser
public void whenAnonymousAccessLogin_thenOk() throws Exception {
    mvc.perform(get("/login"))
      .andExpect(status().isOk());
}

@Test
@WithAnonymousUser
public void whenAnonymousAccessRestrictedEndpoint_thenIsUnauthorized() throws Exception {
    mvc.perform(get("/all"))
      .andExpect(status().isUnauthorized());
}
```
对于除 `/login` 以外的所有端点，都要求进行身份验证，就像上面的 `/all` 端点一样。

### 4.2、测试 User Role
USER 角色可以访问通用的端点以及我们为该角色授权的所有其他路径：
```java
@Test
@WithUserDetails()
public void whenUserAccessUserSecuredEndpoint_thenOk() throws Exception {
    mvc.perform(get("/user"))
      .andExpect(status().isOk());
}

@Test
@WithUserDetails()
public void whenUserAccessRestrictedEndpoint_thenOk() throws Exception {
    mvc.perform(get("/all"))
      .andExpect(status().isOk());
}

@Test
@WithUserDetails()
public void whenUserAccessAdminSecuredEndpoint_thenIsForbidden() throws Exception {
    mvc.perform(get("/admin"))
      .andExpect(status().isForbidden());
}

@Test
@WithUserDetails()
public void whenUserAccessDeleteSecuredEndpoint_thenIsForbidden() throws Exception {
    mvc.perform(delete("/delete"))
      .andExpect(status().isForbidden());
}
```
注意，如果 USER 角色试图访问 ADMIN 端点，则会收到 Forbidden（403） 错误。

相反，没有凭证的用户（如上一示例中的匿名用户）会收到 Unauthorized（401） 错误。

### 4.3、测试 Admin Role
我们可以看到，拥有 ADMIN 角色的人可以访问任何端点：
```java
@Test
@WithUserDetails(value = "admin")
public void whenAdminAccessUserEndpoint_thenOk() throws Exception {
    mvc.perform(get("/user"))
      .andExpect(status().isOk());
}

@Test
@WithUserDetails(value = "admin")
public void whenAdminAccessAdminSecuredEndpoint_thenIsOk() throws Exception {
    mvc.perform(get("/admin"))
      .andExpect(status().isOk());
}

@Test
@WithUserDetails(value = "admin")
public void whenAdminAccessDeleteSecuredEndpoint_thenIsOk() throws Exception {
    mvc.perform(delete("/delete").content("{}"))
      .andExpect(status().isOk());
}
```

## 5、总结
在本文中，我们学习了如何创建一个不使用 `WebSecurityConfigureAdapter` 的 Spring Security 配置，并在创建 Authentication、HTTP Security 和 Web Security 组件时进行替换。

参考：https://www.baeldung.com/spring-deprecated-websecurityconfigureradapter
