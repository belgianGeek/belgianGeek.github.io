// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import "./style.css";
import VueCusdis from "vue-cusdis";

// Components
import Projects from "../components/projects.vue";
import Certifications from "../components/certifications.vue";
import About from "../components/about.vue";
import Blog from "../components/blog.vue";
import CustomLayout from "./customLayout.vue";
import postDate from "../components/postDate.vue";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
  // enhanceApp({ app, router, siteData }) {
  enhanceApp({ app }) {
    app.component("Projects", Projects);
    app.component("Certifications", Certifications);
    app.component("About", About);
    app.component("Blog", Blog);
    app.component("postDate", postDate);
    app.component("VueCusdis", VueCusdis);
  },
};
