<template>
  <nav class="navbar">
    <div class="navbar-logo__container">
      <a class="navbar-logo__container-link" href="/" v-if="logo !== null">
      <img :src="logo" alt="Opeyemi" width="40" height="40" class="navbar-logo__container-image">
      </a>
    </div>
   
  </nav>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'NavbarComponent',
    computed: mapState({logo: state => state.logo})
  }
</script>