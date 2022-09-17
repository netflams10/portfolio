<template>
  <div class="footer-container" v-motion-slide-visible-once-right>
    <div></div>
    <hr />
    <div class="footer">
      <div>&copy; Opeyemi Oluwasegun 2022</div>
      <div>
        <a v-for="contact in contacts" :key="contact.id" target="__blank" :href="contact.url"><vue-feather :type="contact.icon" class="footer__icons"></vue-feather></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    name: 'FooterSection',
    computed: mapState({
      contacts: state => state.contacts
    })
  }
</script>

<style scoped>
  .footer-container {
    display: block;
    padding-bottom: 10px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .footer__icons {
    margin: 0 10px;
    color: none;
  }
  .footer__icons a :hover {
    color: none;
  }
</style>