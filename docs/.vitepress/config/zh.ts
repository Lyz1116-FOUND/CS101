import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-CN',
  description: 'FDUer 计算机入门指南',

  themeConfig: {
    nav: nav(),

    sidebar: sidebarGuide(),

    editLink: {
      pattern: 'https://github.com/FDUCSLG/COMP101/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '关于我们',
      link: '/team',
      activeMatch: '/team'
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar {
  return [
    {
      text: "courses",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "ICS", link: "/courses/ICS" },
      ],
    },
    {
      text: "linux-and-shell",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "linux-and-shell", link: "/linux-and-shell/linux-and-shell" },
      ],
    },
    {
      text: "tools",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "markdown", link: "/tools/markdown" },
        { text: "Latex", link: "/tools/latex" },
        { text: "git-and-github", link: "/tools/git-and-github" },
        { text: "docker", link: "/tools/docker" },
      ],
    },
    { text: "project", link: "/project" },
    { text: "team", link: "/team" },
  ]
}
