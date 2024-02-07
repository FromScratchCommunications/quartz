import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "💎 Unser Quartz Test",
    enableSPA: true,
    enablePopovers: false,
    analytics: {
      provider: "plausible",
    },
    locale: "de-DE",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        // header: "Roboto Mono",
        header: "Roboto Mono",
        // body: "Roboto Mono",
        body: "Roboto",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          // BG, FS white
          light: "#faf8ff",
          // borders, FS green 50
          lightgray: "#aefee5",
          // heavier borders, graph links, FS  purple rain
          gray: "#4500bd",
          // body text, FS deep purple
          darkgray: "#25215a",
          // header text & icons, FS purple rain
          dark: "#4500bd",
          // links, FS HC p!nk
          secondary: "#B81B8B",
          // hover states & visited graph nodes, FS p!nk
          tertiary: "#e237b1",
          // highlight: "rgba(143, 159, 169, 0.15)",
          // internal link background, highlighted text, highlighted lines of code, FS coldplay yellow
          highlight: "#fcf751",
        },
        darkMode: {
          // BG, FS deeper purple 125%
          light: "#1C1943",
          // borders, FS purple rain
          lightgray: "#4500bd",
          // heavier borders, graph links, FS lavender
          gray: "#D7BFFF",
          // body text, FS white lies
          darkgray: "#FAF8FF",
          // header text & icons, FS lavender
          dark: "#D7BFFF",
          // links, FS raspberry sorbet
          secondary: "#F19BD8",
          // hover states & visited graph nodes, FS Barbie
          tertiary: "#f8cdec",
          // internal link background, highlighted text, highlighted lines of code, FS purple rain
          // highlight: "rgba(143, 159, 169, 0.15)",
          highlight: "#4500bd",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
