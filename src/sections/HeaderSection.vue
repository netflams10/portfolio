<template>
  <div class="bg-light main-container" v-motion-slide-visible-once-right>
    <NavbarComponent />
    <div class="header-container row">
      <div class="col-7">
        <h1>Web Developer</h1>
        <h6>I like to craft solid and scalable frontend products with great user experiences.</h6>

        <span>Highly skilled at progressive enhancement, design systems & UI Engineering.</span>
        <span>Over a decade of experience building products for clients across several countries.</span>
      </div>

      <div class="col-5">
        <img src="../assets/images/logo.jpeg" width="200" height="200" alt="display" />
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarComponent from '../components/ui/NavbarComponent.vue';

  export default {
    components: { NavbarComponent }
  }
</script>

<style scoped>
  .header-container {
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
  }
</style>