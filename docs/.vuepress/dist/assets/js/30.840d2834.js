(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{324:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"注解详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解详解"}},[t._v("#")]),t._v(" 注解详解")]),t._v(" "),a("hr"),t._v(" "),a("blockquote",[a("p",[t._v("对包、类、接口、字段、方法参数、局部变量等进行注解")])]),t._v(" "),a("h2",{attrs:{id:"注解基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解基础"}},[t._v("#")]),t._v(" 注解基础")]),t._v(" "),a("p",[t._v("注解是JDK1.5版本开始引入的一个特性，用于对代码进行说明，可以对包、类、接口、字段、方法参数、局部变量等进行注解。它主要的作用有以下四方面：")]),t._v(" "),a("ul",[a("li",[t._v("生成文档，通过代码里标识的元数据生成javadoc文档。")]),t._v(" "),a("li",[t._v("编译检查，通过代码里标识的元数据让编译器在编译期间进行检查验证。")]),t._v(" "),a("li",[t._v("编译时动态处理，编译时通过代码里标识的元数据动态处理，例如动态生成代码。")]),t._v(" "),a("li",[t._v("运行时动态处理，运行时通过代码里标识的元数据动态处理，例如使用反射注入实例。")])]),t._v(" "),a("p",[t._v("这么来说是比较抽象的，我们具体看下注解的常见分类：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Java自带的标准注解")]),t._v("，包括"),a("code",[t._v("@Override")]),t._v("、"),a("code",[t._v("@Deprecated")]),t._v("和"),a("code",[t._v("@SuppressWarnings")]),t._v("，分别用于标明重写某个方法、标明某个类或方法过时、标明要忽略的警告，用这些注解标明后编译器就会进行检查。")]),t._v(" "),a("li",[a("strong",[t._v("元注解")]),t._v("，元注解是用于定义注解的注解，包括"),a("code",[t._v("@Retention")]),t._v("、"),a("code",[t._v("@Target")]),t._v("、"),a("code",[t._v("@Inherited")]),t._v("、"),a("code",[t._v("@Documented")]),t._v("，"),a("code",[t._v("@Retention")]),t._v("用于标明注解被保留的阶段，"),a("code",[t._v("@Target")]),t._v("用于标明注解使用的范围，"),a("code",[t._v("@Inherited")]),t._v("用于标明注解可继承，"),a("code",[t._v("@Documented")]),t._v("用于标明是否生成javadoc文档。")]),t._v(" "),a("li",[a("strong",[t._v("自定义注解")]),t._v("，可以根据自己的需求定义注解，并可用元注解对自定义注解进行注解。")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"java内置注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java内置注解"}},[t._v("#")]),t._v(" Java内置注解")]),t._v(" "),a("p",[t._v("ava 1.5开始自带的标准注解，包括"),a("code",[t._v("@Override")]),t._v("、"),a("code",[t._v("@Deprecated")]),t._v("和"),a("code",[t._v("@SuppressWarnings")]),t._v("：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@Override")]),t._v("：表示当前的方法定义将覆盖父类中的方法")]),t._v(" "),a("li",[a("code",[t._v("@Deprecated")]),t._v("：表示代码被弃用，如果使用了被@Deprecated注解的代码则编译器将发出警告")]),t._v(" "),a("li",[a("code",[t._v("@SuppressWarnings")]),t._v("：表示关闭编译器警告信息")])]),t._v(" "),a("h3",{attrs:{id:"内置注解-override"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置注解-override"}},[t._v("#")]),t._v(" 内置注解 - @Override")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Override")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从它的定义我们可以看到，这个注解可以被用来修饰方法，并且它只在编译时有效，在编译后的class文件中便不再存在。这个注解的作用我们大家都不陌生，那就是告诉编译器被修饰的方法是重写的父类的中的相同签名的方法，编译器会对此做出检查，若发现父类中不存在这个方法或是存在的方法签名不同，则会报错。")]),t._v(" "),a("h3",{attrs:{id:"内置注解-deprecated"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置注解-deprecated"}},[t._v("#")]),t._v(" 内置注解 - @Deprecated")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSTRUCTOR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FIELD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL_VARIABLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PACKAGE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAMETER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Deprecated")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("从它的定义我们可以知道，它会被文档化，能够保留到运行时，能够修饰构造方法、属性、局部变量、方法、包、参数、类型。这个注解的作用是告诉编译器被修饰的程序元素已被“废弃”，不再建议用户使用。")]),t._v(" "),a("h3",{attrs:{id:"内置注解-suppresswarnings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置注解-suppresswarnings"}},[t._v("#")]),t._v(" 内置注解 - @SuppressWarnings")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FIELD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAMETER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSTRUCTOR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL_VARIABLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SuppressWarnings")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("它能够修饰的程序元素包括类型、属性、方法、参数、构造器、局部变量，只能存活在源码时，取值为String[]。它的作用是告诉编译器忽略指定的警告信息.")]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"元注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元注解"}},[t._v("#")]),t._v(" 元注解")]),t._v(" "),a("p",[t._v("在JDK 1.5中提供了4个标准的元注解："),a("code",[t._v("@Target")]),t._v("，"),a("code",[t._v("@Retention")]),t._v("，"),a("code",[t._v("@Documented")]),t._v("，"),a("code",[t._v("@Inherited")]),t._v("。")]),t._v(" "),a("p",[t._v("在JDK 1.8中提供了两个元注解 "),a("code",[t._v("@Repeatable")]),t._v("和"),a("code",[t._v("@Native")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"target"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[t._v("#")]),t._v(" @Target")]),t._v(" "),a("blockquote",[a("p",[t._v("Target注解用来说明那些被它所注解的注解类可修饰的对象范围：注解可以用于修饰 packages、types（类、接口、枚举、注解类）、类成员（方法、构造方法、成员变量、枚举值）、方法参数和本地变量（如循环变量、catch参数），在定义注解类时使用了@Target 能够更加清晰的知道它能够被用来修饰哪些对象，它的取值范围定义在ElementType 枚举中。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Class, interface (including annotation interface), enum, or record\n     * declaration */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Field declaration (includes enum constants) */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FIELD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Method declaration */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Formal parameter declaration */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PARAMETER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Constructor declaration */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CONSTRUCTOR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Local variable declaration */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LOCAL_VARIABLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Annotation interface declaration (Formerly known as an annotation type.) */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ANNOTATION_TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** Package declaration */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PACKAGE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Type parameter declaration\n     * @since 1.8\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_PARAMETER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Use of a type\n     * @since 1.8\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_USE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Module declaration.\n     * @since 9\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Record component\n     * @jls 8.10.3 Record Members\n     * @jls 9.7.4 Where Annotations May Appear\n     * @since 16\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RECORD_COMPONENT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"retention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retention"}},[t._v("#")]),t._v(" @Retention")]),t._v(" "),a("blockquote",[a("p",[t._v("Reteniton注解用来限定那些被它所注解的注解类在注解到其他类上以后，可被保留到何时，一共有三种策略，定义在RetentionPolicy枚举中。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOURCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 源文件保留")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CLASS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编译期保留，默认值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行期保留，可通过反射去获取注解信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"documented"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#documented"}},[t._v("#")]),t._v(" @Documented")]),t._v(" "),a("blockquote",[a("p",[t._v("描述在使用 javadoc 工具为类生成帮助文档时是否要保留其注解信息。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Documented")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestDocAnnotation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"default"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"inherited"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited"}},[t._v("#")]),t._v(" @Inherited")]),t._v(" "),a("blockquote",[a("p",[t._v("被它修饰的Annotation将具有继承性。如果某个类使用了被@Inherited修饰的Annotation，则其子类将自动具有该注解。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Inherited")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Retention")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RetentionPolicy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("RUNTIME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ElementType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestInheritedAnnotation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("values")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"注解与反射接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解与反射接口"}},[t._v("#")]),t._v(" 注解与反射接口")]),t._v(" "),a("blockquote",[a("p",[t._v("定义注解后，如何获取注解中的内容呢？反射包java.lang.reflect下的AnnotatedElement接口提供这些方法。这里注意：只有注解被定义为RUNTIME后，该注解才能是运行时可见，当class文件被装载时被保存在class文件中的Annotation才会被虚拟机读取。")])]),t._v(" "),a("p",[t._v("AnnotatedElement 接口是所有程序元素（Class、Method和Constructor）的父接口，所以程序通过反射获取了某个类的AnnotatedElement对象之后，程序就可以调用该对象的方法来访问Annotation信息。我们看下具体的先关接口")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("boolean isAnnotationPresent(Class<?extends Annotation> annotationClass)")])])]),t._v(" "),a("p",[t._v("判断该程序元素上是否包含指定类型的注解，存在则返回true，否则返回false。注意：此方法会忽略注解对应的注解容器。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<T extends Annotation> T getAnnotation(Class<T> annotationClass)")])])]),t._v(" "),a("p",[t._v("返回该程序元素上存在的、指定类型的注解，如果该类型注解不存在，则返回null。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Annotation[] getAnnotations()")])])]),t._v(" "),a("p",[t._v("返回该程序元素上存在的所有注解，若没有注解，返回长度为0的数组。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)")])])]),t._v(" "),a("p",[t._v("返回该程序元素上存在的、指定类型的注解数组。没有注解对应类型的注解时，返回长度为0的数组。该方法的调用者可以随意修改返回的数组，而不会对其他调用者返回的数组产生任何影响。"),a("code",[t._v("getAnnotationsByType")]),t._v("方法与 "),a("code",[t._v("getAnnotation")]),t._v("的区别在于，"),a("code",[t._v("getAnnotationsByType")]),t._v("会检测注解对应的重复注解容器。若程序元素为类，当前类上找不到注解，且该注解为可继承的，则会去父类上检测对应的注解。")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)")])])]),t._v(" "),a("p",[t._v("返回直接存在于此元素上的所有注解。与此接口中的其他方法不同，该方法将忽略继承的注释。如果没有注释直接存在于此元素上，则返回null")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("<T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)")])])]),t._v(" "),a("p",[t._v("返回直接存在于此元素上的所有注解。与此接口中的其他方法不同，该方法将忽略继承的注释")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Annotation[] getDeclaredAnnotations()")])])]),t._v(" "),a("p",[t._v("返回直接存在于此元素上的所有注解及注解对应的重复注解容器。与此接口中的其他方法不同，该方法将忽略继承的注解。如果没有注释直接存在于此元素上，则返回长度为零的一个数组。该方法的调用者可以随意修改返回的数组，而不会对其他调用者返回的数组产生任何影响。")]),t._v(" "),a("h3",{attrs:{id:"注解支持继承吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解支持继承吗"}},[t._v("#")]),t._v(" 注解支持继承吗？")]),t._v(" "),a("p",[a("strong",[t._v("注解是不支持继承的")])]),t._v(" "),a("p",[t._v("不能使用关键字extends来继承某个@interface，但注解在编译后，编译器会自动继承java.lang.annotation.Annotation接口.")]),t._v(" "),a("p",[t._v("虽然反编译后发现注解继承了Annotation接口，请记住，即使Java的接口可以实现多继承，但定义注解时依然无法使用extends关键字继承@interface。")]),t._v(" "),a("p",[t._v("区别于注解的继承，被注解的子类继承父类注解可以用@Inherited： 如果某个类使用了被@Inherited修饰的Annotation，则其子类将自动具有该注解。")])])}),[],!1,null,null,null);a.default=e.exports}}]);