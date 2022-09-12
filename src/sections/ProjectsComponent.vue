<template>
  <div class="projects">
    <Carousel :items-to-show="3" :wrap-around="true" transition="0">
      <Slide v-for="project in projects" :key="project.id">
        <div class="carousel__item row">
          <div class="col-4 bg-dark carousel__item-container">
            <img :src="project.image" :alt="project.name" width="100%" class="col-12 carousel__item__image" />
          </div>
          <div class="carousel__item__info">
            <div>
              <span>{{project.name}}</span>
            </div>
            <div>
              <a :href="project.url" target="__blank">
                <button type="button" class="more__button">
                  More...
                </button>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide } from "vue3-carousel";

  // projects
  import cubevest from '../assets/projects/cubevest.png'
  import idata from '../assets/projects/idata.png'
  import zero from '../assets/projects/zero.png'
  import cast from '../assets/projects/cast.png'
  import jamborow from '../assets/projects/jamborow.png'

  export default {
    name: 'ProjectsComponent',
    components: { Carousel, Slide },
    data () {
      return {
        projects: [
          {id: 1, name: 'Jamborow', url: 'https://jamborow.co.uk/', image: jamborow},
          {id: 1, name: 'Cubevest', url: 'http://cubevest.com', image: cubevest},
          {id: 1, name: 'I Data', url: 'https://idata.softinventsolutions.com/', image: idata},
          {id: 1, name: 'Zero', url: 'https://e-zero.surge.sh/#/auth/login', image: zero},
          {id: 1, name: 'Cast', url: 'http://https://cast.i.ng', image: cast},
        ]
      }
    }
  }
</script>

<style scoped>
  .projects {
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
  }
</style>