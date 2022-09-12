<template>
  <div class="container">
    <HeaderSection />
    <StackSection />
    <ProjectsComponent />
    <ArticleComponent />
    <MyStackComponent />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from './sections/HeaderSection.vue';
import StackSection from './sections/StackSection.vue';
import ArticleComponent from './sections/ArticleComponent.vue';
import ProjectsComponent from './sections/ProjectsComponent.vue';
import MyStackComponent from './sections/MyStackComponent.vue';
import ContactSection from './sections/ContactSection.vue';
import FooterSection from './sections/FooterSection.vue';

export default {
  name: 'App',
  components: { HeaderSection, StackSection, FooterSection, ContactSection, MyStackComponent, ArticleComponent, ProjectsComponent }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #ddd;
    color: #331a00;
    position: relative;
  }
  a {
    text-decoration: none;
    color: white;
  }
  a :hover {
    color: #4d2600;
  }
</style>
