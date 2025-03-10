// docs/.vitepress/config/index.ts
import { defineConfig as defineConfig3 } from "file:///E:/FDUCSLG/COMP101/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/config/shared.ts
import { defineConfig } from "file:///E:/FDUCSLG/COMP101/node_modules/vitepress/dist/node/index.js";
import {
  PageProperties,
  PagePropertiesMarkdownSection
} from "file:///E:/FDUCSLG/COMP101/node_modules/@nolebase/vitepress-plugin-page-properties/dist/vite/index.mjs";
import {
  GitChangelog,
  GitChangelogMarkdownSection
} from "file:///E:/FDUCSLG/COMP101/node_modules/@nolebase/vitepress-plugin-git-changelog/dist/vite/index.mjs";
import { InlineLinkPreviewElementTransform } from "file:///E:/FDUCSLG/COMP101/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/markdown-it/index.mjs";
import timeline from "file:///E:/FDUCSLG/COMP101/node_modules/vitepress-markdown-timeline/dist/cjs/index.cjs.js";
import taskLists from "file:///E:/FDUCSLG/COMP101/node_modules/markdown-it-task-lists/index.js";
import { groupIconMdPlugin, groupIconVitePlugin } from "file:///E:/FDUCSLG/COMP101/node_modules/vitepress-plugin-group-icons/dist/index.mjs";
import { transformerTwoslash } from "file:///E:/FDUCSLG/COMP101/node_modules/@shikijs/vitepress-twoslash/dist/index.mjs";
var shared = defineConfig({
  title: "COMP101",
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  vite: {
    ssr: {
      noExternal: [
        "@nolebase/*"
      ]
    },
    plugins: [
      GitChangelog({
        maxGitLogCount: 2e3,
        repoURL: () => "https://github.com/FDUCSLG/COMP101"
      }),
      GitChangelogMarkdownSection({
        exclude: (id) => id.endsWith("index.md"),
        sections: {
          // 禁用页面历史
          disableChangelog: true,
          // 禁用贡献者
          disableContributors: false
        }
      }),
      PageProperties(),
      PagePropertiesMarkdownSection({
        excludes: [
          "index.md"
        ]
      }),
      groupIconVitePlugin({
        customIcon: {
          ts: "logos:typescript",
          js: "logos:javascript",
          //js图标
          md: "logos:markdown",
          //markdown图标
          css: "logos:css-3"
          //css图标
        }
      })
    ]
  },
  markdown: {
    math: true,
    config: (md) => {
      md.use(timeline);
      md.use(taskLists);
      md.use(InlineLinkPreviewElementTransform);
      md.use(groupIconMdPlugin);
    },
    codeTransformers: [
      transformerTwoslash()
    ]
  },
  sitemap: {
    hostname: "https://comp101.fducslg.com/",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    }
  },
  /* prettier-ignore */
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/newlogo.png"
      }
    ],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/fducslg.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/fducslg.png" }],
    ["link", { rel: "mask-icon", href: "/assets/fducslg.png", color: "#5bbad5" }],
    ["meta", { name: "theme-color", content: "#5f67ee" }]
  ],
  themeConfig: {
    logo: { src: "/assets/fducslg.png", width: 24, height: 24 },
    //开启本地搜索
    search: {
      provider: "local"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/FDUCSLG/COMP101" }]
  }
});

// docs/.vitepress/config/zh.ts
import { defineConfig as defineConfig2 } from "file:///E:/FDUCSLG/COMP101/node_modules/vitepress/dist/node/index.js";
var zh = defineConfig2({
  lang: "zh-CN",
  description: "FDUer \u8BA1\u7B97\u673A\u5165\u95E8\u6307\u5357",
  themeConfig: {
    nav: nav(),
    sidebar: sidebarGuide(),
    editLink: {
      pattern: "https://github.com/FDUCSLG/COMP101/edit/main/docs/:path",
      text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    lastUpdated: {
      text: "\u6700\u540E\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium"
      }
    },
    langMenuLabel: "\u591A\u8BED\u8A00",
    returnToTopLabel: "\u56DE\u5230\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F"
  }
});
function nav() {
  return [
    {
      text: "\u5173\u4E8E\u6211\u4EEC",
      link: "/team",
      activeMatch: "/team"
    }
  ];
}
function sidebarGuide() {
  return [
    {
      text: "\u8BFE\u7A0B",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "\u8BA1\u7B97\u673A\u7CFB\u7EDF\u57FA\u7840", link: "/courses/ICS" }
      ]
    },
    {
      text: "\u5B9E\u7528\u5DE5\u5177",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Markdown", link: "/tools/markdown" },
        { text: "LaTeX", link: "/tools/latex" },
        { text: "Git & GitHub", link: "/tools/git-and-github" },
        { text: "Docker", link: "/tools/docker" }
      ]
    },
    {
      text: "\u9879\u76EE\u6784\u5EFA",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Make\u5165\u95E8", link: "/tools/intro-make" }
      ]
    },
    {
      text: "Linux & Shell",
      collapsible: true,
      collapsed: true,
      items: [
        { text: "Linux & Shell", link: "/linux-and-shell/linux-and-shell" }
      ]
    },
    { text: "\u9879\u76EE", link: "/project" },
    { text: "\u56E2\u961F", link: "/team" }
  ];
}

// docs/.vitepress/config/index.ts
import { withMermaid } from "file:///E:/FDUCSLG/COMP101/node_modules/vitepress-plugin-mermaid/dist/vitepress-plugin-mermaid.es.mjs";
var config_default = withMermaid(defineConfig3({
  ...shared,
  locales: {
    root: { label: "\u7B80\u4F53\u4E2D\u6587", ...zh }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class"
    // set additional css classes for parent container 
  }
}));
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlnL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcRkRVQ1NMR1xcXFxDT01QMTAxXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEZEVUNTTEdcXFxcQ09NUDEwMVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9GRFVDU0xHL0NPTVAxMDEvZG9jcy8udml0ZXByZXNzL2NvbmZpZy9pbmRleC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHsgc2hhcmVkIH0gZnJvbSAnLi9zaGFyZWQnXHJcbmltcG9ydCB7IHpoIH0gZnJvbSAnLi96aCdcclxuaW1wb3J0IHsgd2l0aE1lcm1haWQgfSBmcm9tIFwidml0ZXByZXNzLXBsdWdpbi1tZXJtYWlkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoTWVybWFpZChkZWZpbmVDb25maWcoe1xyXG4gIC4uLnNoYXJlZCxcclxuICBsb2NhbGVzOiB7XHJcbiAgICByb290OiB7IGxhYmVsOiAnXHU3QjgwXHU0RjUzXHU0RTJEXHU2NTg3JywgLi4uemggfVxyXG4gIH0sXHJcbiAgbWVybWFpZDoge1xyXG4gICAgLy8gcmVmZXIgaHR0cHM6Ly9tZXJtYWlkLmpzLm9yZy9jb25maWcvc2V0dXAvbW9kdWxlcy9tZXJtYWlkQVBJLmh0bWwjbWVybWFpZGFwaS1jb25maWd1cmF0aW9uLWRlZmF1bHRzIGZvciBvcHRpb25zXHJcbiAgfSxcclxuICAvLyBvcHRpb25hbGx5IHNldCBhZGRpdGlvbmFsIGNvbmZpZyBmb3IgcGx1Z2luIGl0c2VsZiB3aXRoIE1lcm1haWRQbHVnaW5Db25maWdcclxuICBtZXJtYWlkUGx1Z2luOiB7XHJcbiAgICBjbGFzczogXCJtZXJtYWlkIG15LWNsYXNzXCIsIC8vIHNldCBhZGRpdGlvbmFsIGNzcyBjbGFzc2VzIGZvciBwYXJlbnQgY29udGFpbmVyIFxyXG4gIH1cclxufSkpO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXEZEVUNTTEdcXFxcQ09NUDEwMVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxGRFVDU0xHXFxcXENPTVAxMDFcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ1xcXFxzaGFyZWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0ZEVUNTTEcvQ09NUDEwMS9kb2NzLy52aXRlcHJlc3MvY29uZmlnL3NoYXJlZC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHtcclxuICBQYWdlUHJvcGVydGllcyxcclxuICBQYWdlUHJvcGVydGllc01hcmtkb3duU2VjdGlvblxyXG59IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLXBhZ2UtcHJvcGVydGllcy92aXRlJztcclxuaW1wb3J0IHtcclxuICBHaXRDaGFuZ2Vsb2csXHJcbiAgR2l0Q2hhbmdlbG9nTWFya2Rvd25TZWN0aW9uLFxyXG59IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWdpdC1jaGFuZ2Vsb2cvdml0ZSc7XHJcbmltcG9ydCB7IElubGluZUxpbmtQcmV2aWV3RWxlbWVudFRyYW5zZm9ybSB9IGZyb20gJ0Bub2xlYmFzZS92aXRlcHJlc3MtcGx1Z2luLWlubGluZS1saW5rLXByZXZpZXcvbWFya2Rvd24taXQnO1xyXG5pbXBvcnQgdGltZWxpbmUgZnJvbSAndml0ZXByZXNzLW1hcmtkb3duLXRpbWVsaW5lJztcclxuaW1wb3J0IHRhc2tMaXN0cyBmcm9tIFwibWFya2Rvd24taXQtdGFzay1saXN0c1wiO1xyXG5pbXBvcnQgeyBncm91cEljb25NZFBsdWdpbiwgZ3JvdXBJY29uVml0ZVBsdWdpbiB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tZ3JvdXAtaWNvbnMnO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm1lclR3b3NsYXNoIH0gZnJvbSAnQHNoaWtpanMvdml0ZXByZXNzLXR3b3NsYXNoJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaGFyZWQgPSBkZWZpbmVDb25maWcoe1xyXG4gIHRpdGxlOiAnQ09NUDEwMScsXHJcbiAgbGFzdFVwZGF0ZWQ6IHRydWUsXHJcbiAgY2xlYW5VcmxzOiB0cnVlLFxyXG4gIG1ldGFDaHVuazogdHJ1ZSxcclxuICB2aXRlOiB7XHJcbiAgICBzc3I6IHtcclxuICAgICAgbm9FeHRlcm5hbDogW1xyXG4gICAgICAgICdAbm9sZWJhc2UvKicsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBHaXRDaGFuZ2Vsb2coe1xyXG4gICAgICAgIG1heEdpdExvZ0NvdW50OiAyMDAwLFxyXG4gICAgICAgIHJlcG9VUkw6ICgpID0+ICdodHRwczovL2dpdGh1Yi5jb20vRkRVQ1NMRy9DT01QMTAxJyxcclxuICAgICAgfSksXHJcbiAgICAgIEdpdENoYW5nZWxvZ01hcmtkb3duU2VjdGlvbih7XHJcbiAgICAgICAgZXhjbHVkZTogKGlkKSA9PiBpZC5lbmRzV2l0aCgnaW5kZXgubWQnKSxcclxuICAgICAgICBzZWN0aW9uczoge1xyXG4gICAgICAgICAgLy8gXHU3OTgxXHU3NTI4XHU5ODc1XHU5NzYyXHU1Mzg2XHU1M0YyXHJcbiAgICAgICAgICBkaXNhYmxlQ2hhbmdlbG9nOiB0cnVlLFxyXG4gICAgICAgICAgLy8gXHU3OTgxXHU3NTI4XHU4RDIxXHU3MzJFXHU4MDA1XHJcbiAgICAgICAgICBkaXNhYmxlQ29udHJpYnV0b3JzOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSBhcyBhbnksXHJcbiAgICAgIFBhZ2VQcm9wZXJ0aWVzKCksXHJcbiAgICAgIFBhZ2VQcm9wZXJ0aWVzTWFya2Rvd25TZWN0aW9uKHtcclxuICAgICAgICBleGNsdWRlczogW1xyXG4gICAgICAgICAgJ2luZGV4Lm1kJyxcclxuICAgICAgICBdLFxyXG4gICAgICB9KSxcclxuICAgICAgZ3JvdXBJY29uVml0ZVBsdWdpbih7XHJcbiAgICAgICAgY3VzdG9tSWNvbjoge1xyXG4gICAgICAgICAgdHM6ICdsb2dvczp0eXBlc2NyaXB0JyxcclxuICAgICAgICAgIGpzOiAnbG9nb3M6amF2YXNjcmlwdCcsIC8vanNcdTU2RkVcdTY4MDdcclxuICAgICAgICAgIG1kOiAnbG9nb3M6bWFya2Rvd24nLCAvL21hcmtkb3duXHU1NkZFXHU2ODA3XHJcbiAgICAgICAgICBjc3M6ICdsb2dvczpjc3MtMycsIC8vY3NzXHU1NkZFXHU2ODA3XHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgIF1cclxuICB9LFxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBtYXRoOiB0cnVlLFxyXG4gICAgY29uZmlnOiAobWQpID0+IHtcclxuICAgICAgLy8gXHU2NUY2XHU5NUY0XHU3RUJGXHJcbiAgICAgIG1kLnVzZSh0aW1lbGluZSlcclxuICAgICAgLy8gXHU0RUZCXHU1MkExXHU1MjE3XHU4ODY4XHJcbiAgICAgIG1kLnVzZSh0YXNrTGlzdHMpXHJcbiAgICAgIC8vIFx1ODg0Q1x1NTE4NVx1OTRGRVx1NjNBNVx1OTg4NFx1ODlDOFxyXG4gICAgICBtZC51c2UoSW5saW5lTGlua1ByZXZpZXdFbGVtZW50VHJhbnNmb3JtKVxyXG4gICAgICAvLyBcdTRFRTNcdTc4MDFcdTdFQzRcdTU2RkVcdTY4MDdcclxuICAgICAgbWQudXNlKGdyb3VwSWNvbk1kUGx1Z2luKVxyXG4gICAgfSxcclxuICAgIGNvZGVUcmFuc2Zvcm1lcnM6IFtcclxuICAgICAgdHJhbnNmb3JtZXJUd29zbGFzaCgpXHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgc2l0ZW1hcDoge1xyXG4gICAgaG9zdG5hbWU6ICdodHRwczovL2NvbXAxMDEuZmR1Y3NsZy5jb20vJyxcclxuICAgIHRyYW5zZm9ybUl0ZW1zKGl0ZW1zKSB7XHJcbiAgICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+ICFpdGVtLnVybC5pbmNsdWRlcygnbWlncmF0aW9uJykpXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLyogcHJldHRpZXItaWdub3JlICovXHJcbiAgaGVhZDogW1xyXG4gICAgW1xyXG4gICAgICAnbGluaycsXHJcbiAgICAgIHtcclxuICAgICAgICByZWw6ICdpY29uJyxcclxuICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICBzaXplczogJzMyeDMyJyxcclxuICAgICAgICBocmVmOiAnL2Fzc2V0cy9uZXdsb2dvLnBuZydcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFsnbGluaycsIHsgcmVsOiAnaWNvbicsIHR5cGU6ICdpbWFnZS9wbmcnLCBzaXplczogJzE2eDE2JywgaHJlZjogJy9hc3NldHMvZmR1Y3NsZy5wbmcnIH1dLFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdhcHBsZS10b3VjaC1pY29uJywgc2l6ZXM6ICcxODB4MTgwJywgaHJlZjogJy9hc3NldHMvZmR1Y3NsZy5wbmcnIH1dLFxyXG4gICAgWydsaW5rJywgeyByZWw6ICdtYXNrLWljb24nLCBocmVmOiAnL2Fzc2V0cy9mZHVjc2xnLnBuZycsIGNvbG9yOiAnIzViYmFkNScgfV0sXHJcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjNWY2N2VlJyB9XSxcclxuICBdLFxyXG5cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbG9nbzogeyBzcmM6ICcvYXNzZXRzL2ZkdWNzbGcucG5nJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDI0IH0sXHJcbiAgICAvL1x1NUYwMFx1NTQyRlx1NjcyQ1x1NTczMFx1NjQxQ1x1N0QyMlxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnXHJcbiAgICB9LFxyXG4gICAgc29jaWFsTGlua3M6IFt7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL0ZEVUNTTEcvQ09NUDEwMScgfV1cclxuICB9XHJcbn0pXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcRkRVQ1NMR1xcXFxDT01QMTAxXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEZEVUNTTEdcXFxcQ09NUDEwMVxcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9GRFVDU0xHL0NPTVAxMDEvZG9jcy8udml0ZXByZXNzL2NvbmZpZy96aC50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgdHlwZSBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5leHBvcnQgY29uc3QgemggPSBkZWZpbmVDb25maWcoe1xyXG4gIGxhbmc6ICd6aC1DTicsXHJcbiAgZGVzY3JpcHRpb246ICdGRFVlciBcdThCQTFcdTdCOTdcdTY3M0FcdTUxNjVcdTk1RThcdTYzMDdcdTUzNTcnLFxyXG5cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbmF2OiBuYXYoKSxcclxuXHJcbiAgICBzaWRlYmFyOiBzaWRlYmFyR3VpZGUoKSxcclxuXHJcbiAgICBlZGl0TGluazoge1xyXG4gICAgICBwYXR0ZXJuOiAnaHR0cHM6Ly9naXRodWIuY29tL0ZEVUNTTEcvQ09NUDEwMS9lZGl0L21haW4vZG9jcy86cGF0aCcsXHJcbiAgICAgIHRleHQ6ICdcdTU3MjggR2l0SHViIFx1NEUwQVx1N0YxNlx1OEY5MVx1NkI2NFx1OTg3NVx1OTc2MidcclxuICAgIH0sXHJcblxyXG4gICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLFxyXG4gICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1J1xyXG4gICAgfSxcclxuXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGxhYmVsOiAnXHU5ODc1XHU5NzYyXHU1QkZDXHU4MjJBJ1xyXG4gICAgfSxcclxuXHJcbiAgICBsYXN0VXBkYXRlZDoge1xyXG4gICAgICB0ZXh0OiAnXHU2NzAwXHU1NDBFXHU2NkY0XHU2NUIwXHU0RThFJyxcclxuICAgICAgZm9ybWF0T3B0aW9uczoge1xyXG4gICAgICAgIGRhdGVTdHlsZTogJ3Nob3J0JyxcclxuICAgICAgICB0aW1lU3R5bGU6ICdtZWRpdW0nXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbGFuZ01lbnVMYWJlbDogJ1x1NTkxQVx1OEJFRFx1OEEwMCcsXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU1NkRFXHU1MjMwXHU5ODc2XHU5MEU4JyxcclxuICAgIHNpZGViYXJNZW51TGFiZWw6ICdcdTgzRENcdTUzNTUnLFxyXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NEUzQlx1OTg5OCcsXHJcbiAgICBsaWdodE1vZGVTd2l0Y2hUaXRsZTogJ1x1NTIwN1x1NjM2Mlx1NTIzMFx1NkQ0NVx1ODI3Mlx1NkEyMVx1NUYwRicsXHJcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiAnXHU1MjA3XHU2MzYyXHU1MjMwXHU2REYxXHU4MjcyXHU2QTIxXHU1RjBGJ1xyXG4gIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIG5hdigpOiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1MTczXHU0RThFXHU2MjExXHU0RUVDJyxcclxuICAgICAgbGluazogJy90ZWFtJyxcclxuICAgICAgYWN0aXZlTWF0Y2g6ICcvdGVhbSdcclxuICAgIH1cclxuICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZGViYXJHdWlkZSgpOiBEZWZhdWx0VGhlbWUuU2lkZWJhciB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdThCRkVcdTdBMEJcIixcclxuICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgaXRlbXM6IFtcclxuICAgICAgICB7IHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU3Q0ZCXHU3RURGXHU1N0ZBXHU3ODQwXCIsIGxpbms6IFwiL2NvdXJzZXMvSUNTXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiXHU1QjlFXHU3NTI4XHU1REU1XHU1MTc3XCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcIk1hcmtkb3duXCIsIGxpbms6IFwiL3Rvb2xzL21hcmtkb3duXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwiTGFUZVhcIiwgbGluazogXCIvdG9vbHMvbGF0ZXhcIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCJHaXQgJiBHaXRIdWJcIiwgbGluazogXCIvdG9vbHMvZ2l0LWFuZC1naXRodWJcIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCJEb2NrZXJcIiwgbGluazogXCIvdG9vbHMvZG9ja2VyXCIgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7IHRleHQ6IFwiXHU5ODc5XHU3NkVFXHU2Nzg0XHU1RUZBXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge3RleHQ6IFwiTWFrZVx1NTE2NVx1OTVFOFwiLCBsaW5rOiBcIi90b29scy9pbnRyby1tYWtlXCJ9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJMaW51eCAmIFNoZWxsXCIsXHJcbiAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcIkxpbnV4ICYgU2hlbGxcIiwgbGluazogXCIvbGludXgtYW5kLXNoZWxsL2xpbnV4LWFuZC1zaGVsbFwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgeyB0ZXh0OiBcIlx1OTg3OVx1NzZFRVwiLCBsaW5rOiBcIi9wcm9qZWN0XCIgfSxcclxuICAgIHsgdGV4dDogXCJcdTU2RTJcdTk2MUZcIiwgbGluazogXCIvdGVhbVwiIH0sXHJcbiAgXVxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsU0FBUyxnQkFBQUEscUJBQW9COzs7QUNBM0IsU0FBUyxvQkFBb0I7QUFDNVU7QUFBQSxFQUNFO0FBQUEsRUFDQTtBQUFBLE9BQ0s7QUFDUDtBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsT0FDSztBQUNQLFNBQVMseUNBQXlDO0FBQ2xELE9BQU8sY0FBYztBQUNyQixPQUFPLGVBQWU7QUFDdEIsU0FBUyxtQkFBbUIsMkJBQTJCO0FBQ3ZELFNBQVMsMkJBQTJCO0FBRTdCLElBQU0sU0FBUyxhQUFhO0FBQUEsRUFDakMsT0FBTztBQUFBLEVBQ1AsYUFBYTtBQUFBLEVBQ2IsV0FBVztBQUFBLEVBQ1gsV0FBVztBQUFBLEVBQ1gsTUFBTTtBQUFBLElBQ0osS0FBSztBQUFBLE1BQ0gsWUFBWTtB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QUVBLGVBQWU7QUFBQSxJQUNmLGtCQUFrQjtBQUFBLElBQ2xCLGtCQUFrQjtBQUFBLElBQ2xCLHFCQUFxQjtBQUFBLElBQ3JCLHNCQUFzQjtBQUFBLElBQ3RCLHFCQUFxQjtBQUFBLEVBQ3ZCO0FBQ0YsQ0FBQztBQUVELFNBQVMsTUFBOEI7QUFDckMsU0FBTztBQUFBLElBQ0w7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBUyxlQUFxQztBQUM1QyxTQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLDhDQUFXLE1BQU0sZUFBZTtBQUFBLE1BQzFDO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxRQUNMLEVBQUUsTUFBTSxZQUFZLE1BQU0sa0JBQWtCO0FBQUEsUUFDNUMsRUFBRSxNQUFNLFNBQVMsTUFBTSxlQUFlO0FBQUEsUUFDdEMsRUFBRSxNQUFNLGdCQUFnQixNQUFNLHdCQUF3QjtBQUFBLFFBQ3RELEVBQUUsTUFBTSxVQUFVLE1BQU0sZ0JBQWdCO0FBQUEsTUFDMUM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQUUsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBQyxNQUFNLG9CQUFVLE1BQU0sb0JBQW1CO0FBQUEsTUFDNUM7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsT0FBTztBQUFBLFFBQ0wsRUFBRSxNQUFNLGlCQUFpQixNQUFNLG1DQUFtQztBQUFBLE1BQ3BFO0FBQUEsSUFDRjtBQUFBLElBQ0EsRUFBRSxNQUFNLGdCQUFNLE1BQU0sV0FBVztBQUFBLElBQy9CLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFFBQVE7QUFBQSxFQUM5QjtBQUNGOzs7QUZ4RkEsU0FBUyxtQkFBbUI7QUFFNUIsSUFBTyxpQkFBUSxZQUFZQyxjQUFhO0FBQUEsRUFDdEMsR0FBRztBQUFBLEVBQ0gsU0FBUztBQUFBLElBQ1AsTUFBTSxFQUFFLE9BQU8sNEJBQVEsR0FBRyxHQUFHO0FBQUEsRUFDL0I7QUFBQSxFQUNBLFNBQVM7QUFBQTtBQUFBLEVBRVQ7QUFBQTtBQUFBLEVBRUEsZUFBZTtBQUFBLElBQ2IsT0FBTztBQUFBO0FBQUEsRUFDVDtBQUNGLENBQUMsQ0FBQzsiLAogICJuYW1lcyI6IFsiZGVmaW5lQ29uZmlnIiwgImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciLCAiZGVmaW5lQ29uZmlnIl0KfQo=
