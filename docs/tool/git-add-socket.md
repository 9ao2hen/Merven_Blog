# git 命令 使用socks代理



如果您想在使用 Git 命令时通过 SOCKS 代理连接到远程仓库，您可以通过配置 Git 的全局代理设置来实现。以下是在命令行中使用 SOCKS 代理的步骤：

## 设置 SOCKS 代理：

首先，确保您已经有一个可用的 SOCKS 代理服务器的主机名（或 IP 地址）和端口号。假设代理服务器的主机名是 `proxy.example.com`，端口是 `1080`。

> 比如我自己的代理主机地址是:127.0.0.1:1080

## 配置 Git 全局代理设置：

命令行输入:

```shell
git config --global http.proxy socks5://127.0.0.1:1080
git config --global https.proxy socks5://127.0.0.1:1080

#如果不想全局代理可以使用一下命令:
git config --local http.proxy socks5://127.0.0.1:1080
git config --local https.proxy socks5://127.0.0.1:1080
```

## 如果代理需要认证:

```shell
git config --local http.proxy socks5://username:password@127.0.0.1:1080
git config --local https.proxy socks5://username:password@127.0.0.1:1080
```



## 取消代理

```shell
git config --local --unset http.proxy
git config --local --unset https.proxy
```

