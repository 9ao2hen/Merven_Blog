(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{330:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"git-命令-使用socks代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git-命令-使用socks代理"}},[a._v("#")]),a._v(" git 命令 使用socks代理")]),a._v(" "),s("p",[a._v("如果您想在使用 Git 命令时通过 SOCKS 代理连接到远程仓库，您可以通过配置 Git 的全局代理设置来实现。以下是在命令行中使用 SOCKS 代理的步骤：")]),a._v(" "),s("h2",{attrs:{id:"设置-socks-代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-socks-代理"}},[a._v("#")]),a._v(" 设置 SOCKS 代理：")]),a._v(" "),s("p",[a._v("首先，确保您已经有一个可用的 SOCKS 代理服务器的主机名（或 IP 地址）和端口号。假设代理服务器的主机名是 "),s("code",[a._v("proxy.example.com")]),a._v("，端口是 "),s("code",[a._v("1080")]),a._v("。")]),a._v(" "),s("blockquote",[s("p",[a._v("比如我自己的代理主机地址是:127.0.0.1:1080")])]),a._v(" "),s("h2",{attrs:{id:"配置-git-全局代理设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-git-全局代理设置"}},[a._v("#")]),a._v(" 配置 Git 全局代理设置：")]),a._v(" "),s("p",[a._v("命令行输入:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" http.proxy socks5://127.0.0.1:1080\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--global")]),a._v(" https.proxy socks5://127.0.0.1:1080\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果不想全局代理可以使用一下命令:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" http.proxy socks5://127.0.0.1:1080\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" https.proxy socks5://127.0.0.1:1080\n")])])]),s("h2",{attrs:{id:"如果代理需要认证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如果代理需要认证"}},[a._v("#")]),a._v(" 如果代理需要认证:")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" http.proxy socks5://username:password@127.0.0.1:1080\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" https.proxy socks5://username:password@127.0.0.1:1080\n")])])]),s("h2",{attrs:{id:"取消代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消代理"}},[a._v("#")]),a._v(" 取消代理")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--unset")]),a._v(" http.proxy\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" config "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--local")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--unset")]),a._v(" https.proxy\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);