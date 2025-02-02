<script setup>
import { useData } from 'vitepress';
const { site } = useData();
import postDate from "./postDate.vue";
</script>

<template>
  <h2 class="strong title">Blog</h2>
  <article class="blogDesc">
    <p>Voici ci-dessous le contenu de mon blog, classé par date de parution.</p>

    <p>Vous y trouverez des articles sur mon amour des jeux vidéos et de la littérature, des critiques de films plus ou
      moins bons et d'une manière générale un peu tout ce qui me passe par la tête et que j'ai voulu mettre par écrit.
    </p>

    <p>Bonne lecture !</p>
  </article>

  <div class="blogHome">
    <article class="blogItem" :id="post.text.replace(' ', '-')" v-for="post in site.themeConfig.sidebar[0].items">
      <strong>
        <img :src="post.img" :alt="'Illustration de ' + post.text" />
        <div class="blogItem__Container">
          <header>
            <h2 class="strong">
              <a :href="post.link" class="customLink blogItem__Link">
                {{ post.text }}
              </a>
            </h2>
            {{ post.date }}
            <postDate :creationDate="post.createdDateTime" />
          </header>
          <p v-if="post.description[post.description.length -1].match(/[.:;,?.!]/)" class="desc">{{ post.description }}</p>
          <p v-else class="desc">{{ post.description }}...</p>
        </div>
      </strong>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
}

.blogHome {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.blogDesc {
  text-align: center;
}

.blogItem {
  min-width: 25%;
  max-width: 28%;
  padding: 1em;
  margin: 1.5em;
  border: 1px solid black;
  border-radius: 0.5em;
  flex: 1;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  &__Container {
    width: 100%;
    color: white;
  }

  header {
    padding: 1em;
  }

  .desc {
    margin-top: 1em;
    text-align: justify;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    object-fit: cover;
    filter: blur(2px) brightness(0.5);
    background-color: black;
  }
}
</style>