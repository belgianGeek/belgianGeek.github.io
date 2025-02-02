<script setup>
const projects = [{
  name: "Open Planner",
  description: "Un programme de ticketing simple et performant",
  link: "https://github.com/belgianGeek/open-planner",
  iconPath: "images/openplanner.webp",
  iconLegend: "Logo d'Open Planner, représentant une croix formée par tournevis jaune et une clé anglaise grise"
},
{
  name: "BadassBoard",
  description: "Une application web pour rester au courant de l'actualité tout en en écoutant votre musique",
  link: "https://github.com/belgianGeek/BadassBoard",
  iconPath: "images/bb.webp",
  iconLegend: "Un emoji représentant une tête jaune habillée de lunettes de soleil"
},
{
  name: "PIB Manager",
  description: "Pour gérer vos prêts interbibliothèques sans prise de tête",
  link: "https://github.com/belgianGeek/pib-manager",
  iconPath: "images/pib.webp",
  iconLegend: "Image représentant une pile de livres colorés"
},
{
  name: "Rotten Parser",
  description: "Module Node.js parcourant rottentomatoes.com pour obtenir des critiques de films",
  link: "https://github.com/belgianGeek/rotten-parser",
  iconPath: "images/rotten-parser.webp",
  iconLegend: "Une tache multicolore"
},
]
</script>

<template>
  <h2>Projets</h2>

  <div class="projects">
    <div class="item" v-for="project in projects">
      <img :src="project.iconPath" :alt="project.iconLegend" />
      <header>
        <h3 class="strong">
          <a :href="project.link" class="customLink">
            {{ project.name }}
          </a>
        </h3>
        <p class="desc">{{ project.description }}</p>
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.item {
  margin-bottom: 1em;
  flex: 1;
  padding: 1em;

  header {
    padding: 1em;
  }

  .desc {
    margin-top: 1em;
    text-align: justify;
  }

  img {
    height: 50%;
  }

  &:hover {
    box-shadow: 0 0 1em rgba(0, 0, 0, 0.5);
    background-color: var(--vp-c-bg-opposite);
    color: var(--vp-c-bg);
    border-radius: .5em;
    transition: all 1s ease;
    
    a {
      color: var(--vp-c-bg);
    }
  }
}
</style>