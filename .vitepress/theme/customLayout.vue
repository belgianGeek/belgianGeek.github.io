<script setup>
import DefaultTheme from 'vitepress/theme';
import { Content, useData } from 'vitepress';
import VueCusdis from 'vue-cusdis';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-before>
      <div role="img" class="postCover" :style="`background-image: url(${frontmatter.image});`"></div>
    </template>
    <!-- <template #doc-footer-before>
      <h2 class="h2">Cet article vous a (dé)plu ? Laissez-moi un commentaire !</h2>
      <VueCusdis class="cusdis_container" :attrs="{
        host: 'https://cusdis.com',
        appId: '29751d5d-39b1-4574-b7bc-a49a6ce12181',
        pageId: 'PAGE_ID',
        pageTitle: 'PAGE_TITLE',
        pageUrl: 'PAGE_URL',
        theme: 'dark'
      }"></VueCusdis>
    </template> -->
  </Layout>
</template>

<style lang="scss">
.postCover {
  z-index: 1;
  height: 45vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  top: -5vh;
  position: relative;
  margin: 0;
}
</style>