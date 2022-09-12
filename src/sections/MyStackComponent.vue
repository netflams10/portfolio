<template>
    <Carousel autoplay="3000" :items-to-show="4" :wrap-around="true" transition="300">
      <Slide v-for="language in languages" :key="language.id">
        <div class="carousel__item">
          <img :src="language.name" :alt="language.name" width="100" height="100" />
        </div>
      </Slide>
    </Carousel>
</template>

<script>
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide } from "vue3-carousel";

  // images must be changed soon
  import css3 from '../assets/languages/css3.png';
  import docker from '../assets/languages/docker.png';
  import html from '../assets/languages/html.png';
  import js from '../assets/languages/js.png';
  import mysql from '../assets/languages/mysql.png';
  import nodejs from '../assets/languages/nodejs.png';
  import php from '../assets/languages/php.png';
  import postgres from '../assets/languages/postgres.png';
  import python from '../assets/languages/python.png';
  import reactnative from '../assets/languages/react-native.png';
  import sql from '../assets/languages/sql.png';
  import ts from '../assets/languages/ts.png';
  import vue from '../assets/languages/vue.png';

  export default {
    name: 'MyStackComponent',
    components: {Carousel, Slide},
    data () {
      return {
        languages: [
          {id: 1, name: html},
          {id: 2, name: css3},
          {id: 3, name: docker},
          {id: 4, name: js},
          {id: 5, name: mysql},
          {id: 6, name: nodejs},
          {id: 7, name: php},
          {id: 8, name: postgres},
          {id: 9, name: python},
          {id: 10, name: reactnative},
          {id: 11, name: sql},
          {id: 12, name: ts},
          {id: 13, name: vue},
        ]
      }
    }
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