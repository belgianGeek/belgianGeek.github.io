<script setup>
import DefaultTheme from 'vitepress/theme';
import { Content, useData } from 'vitepress';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
</script>

<template>
  <Layout>
    <template #doc-before>
      <div role="img" class="postCover" :style="`background-image: url(${frontmatter.image});`"></div>
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
</style>