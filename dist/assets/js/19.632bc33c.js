(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{296:function(s,t,a){s.exports=a.p+"assets/img/image-20230915182331600.5f8c6635.png"},297:function(s,t,a){s.exports=a.p+"assets/img/1694759765303-2af5b96b-ce42-4dcb-9c94-15d27d36feba.c1d138b1.png"},298:function(s,t,a){s.exports=a.p+"assets/img/1694760066491-727e4b5e-9ea7-4b09-9e54-533eaa6633ec.99e08f25.png"},299:function(s,t,a){s.exports=a.p+"assets/img/image-20230915182838717.ee1bcbeb.png"},324:function(s,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"什么是vuepress"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是vuepress"}},[s._v("#")]),s._v(" 什么是VuePress")]),s._v(" "),t("blockquote",[t("p",[s._v("VuePress 由两部分组成：第一部分是一个极简静态网站生成器 (opens new window)，它包含由 Vue 驱动的主题系统和插件 API，另一个部分是为书写技术文档而优化的默认主题，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。\n每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。\n-- "),t("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://vuepress.vuejs.org/zh/guide/"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("说白了就是，可以把文档转化成静态网页，并且支持插件、主题。")]),s._v(" "),t("h2",{attrs:{id:"能达到什么效果呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#能达到什么效果呢"}},[s._v("#")]),s._v(" 能达到什么效果呢？")]),s._v(" "),t("p",[s._v("拿mybatis-plus官网文档举例来说，就是下边这个样子：\n包含了目录，内容，功能栏目，目录等。\n"),t("img",{attrs:{src:a(296),alt:"image-20230915182331600"}})]),s._v(" "),t("h2",{attrs:{id:"搭建一个最简单的demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#搭建一个最简单的demo"}},[s._v("#")]),s._v(" 搭建一个最简单的demo")]),s._v(" "),t("h3",{attrs:{id:"_1、运行环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、运行环境"}},[s._v("#")]),s._v(" 1、运行环境")]),s._v(" "),t("p",[s._v("由于vuepress是基于vue的，那就需要node.js的环境\n"),t("a",{attrs:{href:"https://nodejs.org/zh-cn",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nodejs.org/zh-cn"),t("OutboundLink")],1),s._v(" nodejs官网下载安装即可")]),s._v(" "),t("h3",{attrs:{id:"_2、创建本地工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建本地工程"}},[s._v("#")]),s._v(" 2、创建本地工程")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、新建文件夹 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" vuepress-demo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" vuepress-demo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、初始化包管理器 (如果你习惯时候用npm 可以使用 npm init)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-py")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、安装vuepress ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-D")]),s._v(" vuepress \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm安装使用命令： npm install -D vuepress")]),s._v("\n\n")])])]),t("p",[s._v("生成如下目录结构：\n"),t("img",{attrs:{src:a(297),alt:"image.png"}})]),s._v(" "),t("h3",{attrs:{id:"_3、添加必备的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、添加必备的文件"}},[s._v("#")]),s._v(" 3、添加必备的文件")]),s._v(" "),t("p",[s._v("首先要在根目录下添加一个docs文件夹\n然后在docs下新增一个文档 README.md")]),s._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[t("span",{pre:!0,attrs:{class:"token title important"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("#")]),s._v(" hello vuepress!!")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("在默认未改配置的情况下，docs/README.md会被自动识别编译，如果改成其他文件名，可能无法识别")])]),s._v(" "),t("h3",{attrs:{id:"_4、下面开始配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、下面开始配置"}},[s._v("#")]),s._v(" 4、下面开始配置")]),s._v(" "),t("h4",{attrs:{id:"首相配置一下启动的脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首相配置一下启动的脚本"}},[s._v("#")]),s._v(" 首相配置一下启动的脚本")]),s._v(" "),t("p",[s._v("package.json添加脚本")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("添加后如下图")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-demo"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index.js"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"license"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MIT"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"private"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"devDependencies"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^1.9.10"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),t("p",[s._v("添加以后就可以启动了：\n启动命令：yarn dev\n"),t("img",{attrs:{src:a(298),alt:"image.png"}})]),s._v(" "),t("p",[s._v("然后打开浏览器："),t("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),t("OutboundLink")],1),s._v("\n就可以看到效果了：\n"),t("img",{attrs:{src:a(299),alt:"image-20230915182838717"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);