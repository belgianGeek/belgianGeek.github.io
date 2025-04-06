<script setup>
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-before v-if="frontmatter.layout === 'doc'">
      <div role="img" class="postCover" :style="`background-image: url(${frontmatter.image});`"></div>
    </template>
    <template #doc-footer-before v-if="frontmatter.layout === 'doc'">
      <article class="tags">
        <a class="tag customLink" :href="`/tags/${tag}`" v-for="tag in frontmatter.tags.split(', ')">#{{ tag }}</a>
      </article>
    </template>
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

.tag {
  margin: 0 1em;
}
</style>