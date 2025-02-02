<template>
  <h2 id="about">À propos de moi</h2>

  <div class="about">
    <img :src="'images/id.webp'" alt="Maxime Deposson" loading="lazy">

    <article>
      <p>Je m'appelle Maxime et j'habite en Belgique, en région liégeoise.</p>

      <p>Passionné de littérature, de photographie et d'informatique, je travaille au sein du groupe Spadel comme
        System Engineer. J'ai occupé auparavant le poste de technicien en informatique au Centre IFAPME
        Liège-Huy-Verviers
        pendant 3 ans.</p>

      <p>Étant bibliothécaire-documentaliste de formation, j'ai occupé plusieurs postes dans ce domaine.</p>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.about {
  box-sizing: border-box;
  display: flex;

  article {
    display: flex;
    justify-content: center;
    text-align: justify;
    flex-direction: column;
    padding: 1em;
    font-size: 1.1em;
  }

  img {
    height: 50%;
    float: left;
  }
}
</style>