// docs/.vitepress/config.js
export default {

    title: "COMP101",
    description: "FDUer 计算机入门指南",
    base: "/COMP101/",

    themeConfig: {
        siteTitle: "FDUCSLG",
        logo: "/fducslg.jpg",
        nav: [
          {
            text: "关于我们",
            items: [
              {
                items: [
                  { text: "project", link: "/project" },
                  { text: "team", link: "/team" },
                ],
              },
            ],
          },
        ],
        socialLinks: [
          { icon: "github", link: "https://github.com/FDUCSLG" },
          // You can also add custom icons by passing SVG as string:
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
            },
            link: "...",
          },
        ],
        sidebar: [
          {
            text: "courses",
            collapsible: true,
            collapsed: true,
            items: [
              { 
                text: "ICS", 
                link: "/courses/ICS",
              },
            ],
          },
          {
            text: "linux-and-shell",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "linux-and-shell",
                link: "/linux-and-shell/linux-and-shell",
              },
            ],
          },
          {
            text: "tools",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "markdown",
                link: "/tools/markdown",
              },
              {
                text: "Latex",
                link: "/tools/latex",
              },
              {
                text: "git-and-github",
                link: "/tools/git-and-github",
              },
              {
                text: "docker",
                link: "/tools/docker",
              },
            ],
          },
          {
            text: "project",
            link: "/project",
          },
          {
            text: "team",
            link: "/team",
          },
        ],
    },
  };