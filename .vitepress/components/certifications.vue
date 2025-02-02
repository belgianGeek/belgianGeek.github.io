<script setup>
const certs = [{
  name: "Cisco Certified Network Associate (CCNA)",
  description: "Code de vérification",
  link: "https://www.credly.com/badges/4096ba24-536e-4e60-abab-0b1f30f5d653/linked_in_profile",
  iconPath: "https://images.credly.com/size/340x340/images/683783d8-eaac-4c37-a14d-11bd8a36321d/ccna_600.png",
  iconLegend: "Image contenant le texte Cisco certified CCNA en noir, entouré de deux ellipses turquoises",
  checkCode: "88750c23255d42c794bc5c03b41072ce"
},
{
  name: "3CX Basic Certified Engineer v16",
  description: "Code de vérification",
  link: "https://www.3cx.com",
  iconPath: "images/3cx-basic.webp",
  iconLegend: "Cercle noir contenant le texte 3CX Basic Certified en blanc et bleu clair",
  checkCode: "rAqqjBEuq2"
},
{
  name: "3CX Intermediate Certified Engineer v16",
  description: "Code de vérification",
  link: "https://www.3cx.com",
  iconPath: "images/3cx-intermediate.webp",
  iconLegend: "Cercle noir contenant le texte 3CX Intermediate Certified en blanc et bleu clair",
  checkCode: "XxPHSkG6mS"
},
{
  name: "3CX Advanced Certified Engineer v16",
  description: "Code de vérification",
  link: "https://www.3cx.com",
  iconPath: "images/3cx-advanced.webp",
  iconLegend: "Cercle noir contenant le texte 3CX Advanced Certified en blanc et bleu clair",
  checkCode: "8mIegKDq5y"
}
]


</script>

<template>
  <h2 id="certs">Certifications</h2>

  <div class="certs">
    <div class="item" v-for="cert in certs">
      <img :src="cert.iconPath" :alt="cert.iconLegend" />
      <header>
        <h3 class="strong">
          <a :href="cert.link" class="customLink">
            {{ cert.name }}
          </a>
        </h3>
        <p class="desc">
          {{ cert.description }}
          <strong>
            {{ cert.checkCode }}
          </strong>
        </p>
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.certs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  line-height: 1.5em;
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
  }

  img {
    max-height: 50%;
    background-color: white;
    border-radius: 50%;
    margin: 0 auto;
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

.link {
  border-bottom: dotted 1px rgba(128, 128, 128, 0.5);
  transition: color 0.35s ease-in-out, border-bottom-color 0.35s ease-in-out;
  outline: 0;
  background-image: linear-gradient(90deg, #020024 0%, #1b1b1d 25%, #ffd400 50%);
  text-decoration: none;
  background-position: 0 1.15em;
  background-repeat: repeat-x;
  background-size: cover;
  color: var(--vp-c-text-1);

  &:hover {
    background-position: 0 0.9em;
    transition: 300ms background-position;
    color: var(--vp-c-text-1);
  }
}
</style>