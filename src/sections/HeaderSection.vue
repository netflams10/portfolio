<template>
  <div class="header-container">
    <NavbarComponent />
    <hr />
    <div class="header-container__container">
      <div class="l-column column">
        <span class="headings text-[32px] text-success">Web Developer</span>
        <span class="sub-headings">I like to build solid and scalable products with great user experiences.</span>

        <div class="header-footer">
          <span>Highly skilled at backend api, design systems & UI Engineering.</span>
          <span>Over a 2 years of experience building products.</span>
        </div>
      </div>

      <div class="s-column column" v-if="logo !== null">
        <div class="image__container">
          <div class="image__container-wrapper">
            <img  :src="logo" alt="display" class="image__container-image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import NavbarComponent from '../components/ui/NavbarComponent.vue';

  export default {
    name: 'HeaderComponent',
    components: { NavbarComponent },
    computed: mapState({
      logo: state => state.logo
    })
  }
</script>

<style scoped>
  /* .header-container {
    background-image: url('../assets/svgs/wave.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    padding: 40px 30px 50px;
    justify-content: center;
    align-items: center;
  }
  .main-container {
    overflow: hidden;
  } */
</style>