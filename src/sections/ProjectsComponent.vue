<template>
  <div class="projects">
    <h1>Projects</h1>
    <Carousel v-if="projects.length > 0" :items-to-show="3" :wrap-around="true" :transition="0">
      <Slide v-for="project in projects" :key="project.id">
        <div class="carousel__item">
          <div class="carousel__item-container">
            <img :src="project.image" :alt="project.name" class="carousel__item__image" />
          </div>
          <div class="carousel__item__info">
              <span>{{project.name}}</span>
              <a :href="project.url" target="__blank">
                <button type="button" class="more__button">
                  More...
                </button>
              </a>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div v-else></div>
  </div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide } from "vue3-carousel";
  import { mapState } from 'vuex'

  export default {
    name: 'ProjectsComponent',
    components: { Carousel, Slide },
    computed: mapState({
      projects: state => state.projects
    })
  }
</script>

<style scoped>
  /* .projects {
    padding: 20px 0;
  }
  .carousel__item {
    display: flex;
    flex-direction: column;
  }
  .carousel__item-container {
    width: 100%;
    height: 350px;
  }
  .carousel__item__info {
    background-color: yellow;
    position: absolute;
  }
  .carousel__item__image {
    height: 100%;
  } */
</style>