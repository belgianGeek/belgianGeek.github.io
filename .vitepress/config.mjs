import { defineConfig } from 'vitepress';
import { join } from "node:path";
import { readdirSync } from "node:fs";
import matter from "gray-matter";

const posts = readdirSync(join(__dirname, "../posts"));
let postTags = [];
let sidebarTags = [];

let postCollection = [];
for (const post of posts) {
  const postMetadata = matter.read(join(__dirname, `../posts/${post}`));  
  
  // Add each post tag to the postTags array only if it's not already included
  for (let tag of postMetadata.data.tags.split(', ')) {
    tag = tag.normalize('NFD').replace(/\p{Diacritic}/gu, '').split(' ').join('-');
    if (!postTags.map(t => t.toLowerCase()).includes(tag.toLowerCase())) {
      // Remove diacritics symbols from tags as they will be used in URLs
      postTags.push(tag);
      sidebarTags.push({
        text: tag.split('-').join(' '),
        link: `/blog/#${tag}`
      });
    }
  }

  postCollection.push({
    createdDateTime: postMetadata.data.date,
    description: String(postMetadata.data.description)
      .split(" ")
      .slice(0, 100)
      .join(" "),
    img: postMetadata.data.image,
    link: `/posts/${post.match(/(\d{1,}-){1,}(\w{1,}-){1,}(\w{1,})/g)}`,
    text: postMetadata.data.title,
    tags: postMetadata.data.tags.split(', '),
    updatedDateTime: postMetadata.data.updateDate,
  });
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "fr-BE",
  title: "belGeek | Culture & tech au max",
  description: "Bienvenue sur le blog et portfolio de Maxime Deposson",
  assetsDir: "assets",
  transformHead(pageData) {
    return [
      [
        "meta",
        {
          name: "og:title",
          content: pageData.title,
        },
      ],
      [
        "meta",
        {
          name: "og:site_name",
          content: "belGeek | Culture & tech au Max",
        },
      ],
      ["meta", { property: "og:type", content: "website" }],
      [
        "meta",
        {
          property: "og:description",
          content: pageData.description,
        },
      ],
      [
        "meta",
        {
          property: "og:locale",
          content: "fr-BE",
        },
      ],
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["meta", { name: "author", content: "Maxime Deposson" }],
      [
        "meta",
        { property: "og:url", content: "https://belgiangeek.github.io" },
      ],
      [
        "script",
        {
          async: true,
          src: "/analytics.js"
        }
      ]
    ];
  },
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://belgiangeek.github.io",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      copyright: "Copyright © 2025-present Maxime Deposson",
    },
    lastUpdated: {
      text: "Dernière mise à jour ",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Blog", link: "/blog" },
    ],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Posts",
        items: postCollection.reverse(),
      },
      {
        text: "Tags",
        items: sidebarTags,
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/belgianGeek",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/maxime-deposson/",
      },
    ],
  },
});
