<template>
    <Carousel v-if="stacks.length > 0" :autoplay="3000" :items-to-show="4" :wrap-around="true" :transition="300">
      <Slide v-for="stack in stacks" :key="stack.id">
        <div class="carousel__item">
          <img :src="stack.image" :alt="stack.name" width="100" height="100" />
        </div>
      </Slide>
    </Carousel>
    <div v-else></div>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide } from "vue3-carousel";
  import { mapState } from 'vuex'

  export default {
    name: 'MyStackComponent',
    components: {Carousel, Slide},
    computed: mapState({
      stacks: state => state.stacks
    })
  }
</script>

<style>
  .carousel__item {
    overflow: hidden;
    min-height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>