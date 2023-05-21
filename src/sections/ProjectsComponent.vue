<template>
  <div class="projects" v-motion-slide-visible-once-left>
    <h1 class="text-opacity-50 text-[blue]">Projects</h1>
    <Carousel v-if="projects.length > 0" :items-to-show="3" :wrap-around="true" :transition="0">
      <Slide v-for="project in projects" :key="project.id">
        <div class="carousel__item">
          <div class="carousel__item-container">
            <img :src="project.image" :alt="project.name" class="carousel__item__image" />
          </div>
          <div class="carousel__item__info">
              <!-- <span>{{project.name}}</span> -->
              <a :href="project.url" target="__blank" class="bg-[blue] bg-opacity-50 cursor-pointer px-5 py-2 text-[white] rounded-md font-bold">
                Visit {{ project.name }}
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
</style>