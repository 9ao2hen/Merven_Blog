
module.exports = {
  base: "/Merven_Blog/",
  title: "墨文博客",
  description: "欢迎来到墨文的博客",
  // dest:"dest",
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  // theme: 'reco',
  themeConfig: {
    // 导航
    nav: [
      { text: "主页", link: "/" },
      { text: "JVM", link: "/JVM/" },
      { text: "设计模式", link: "/development/" },
      { text: "工具", link: "/notes/" },
      // 下拉列表的配置
      {
        text: "Languages",
        items: [
          { text: "中文", link: "/language/chinese" },
          { text: "English", link: "/language/English" },
        ],
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: "vue-press教程",
        path: "/blog/hello-vuepress",
        collapsable: false, // 不折叠
        children: [{ title: "Hello VuePress", path: "/blog/hello-vuepress" }],
      },
      {
        title: "基础学习",
        path: "/javaBase/JavaBase",
        collapsable: false, // 不折叠
        children: [
          { title: "Java基础", path: "/javaBase/JavaBase" },
          { title: "注解详解", path: "/javaBase/Annotation" },
          { title: "范型详解", path: "/javaBase/Paradigm" },
          { title: "Map源码分析", path: "/javaBase/HashMap" },
        ],
      },
      {
        title: "面向对象",
        path: "/oop/solid",
        collapsable: false, // 不折叠
        children: [
          { title: "solid原则", path: "/oop/solid" },
          { title: "uml", path: "/oop/uml" },
        ],
      },
      {
        title: "进阶",
        path: "/javaAdvance/thread-theory",
        collapsable: false, // 不折叠
        children: [
          { title: "理论基础", path: "/javaAdvance/thread-theory" },
          { title: "Volatile关键字", path: "/javaAdvance/thread-key-volatile" },
        ],
      },
      {
        title: "工具",
        path: "/tool/git-add-socket",
        collapsable: false, // 不折叠
        children: [
          { title: "git使用 socket 代理", path: "/tool/git-add-socket" },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    toc: {
      includeLevel: [1, 2, 3, 4],
    },
  },
  plugins: [
    '@vuepress/back-to-top'
  ],
};
