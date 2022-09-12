<template>
  <div class="footer-container">
    <div></div>
    <hr />
    <div class="footer">
      <div>&copy; Opeyemi Oluwasegun 2022</div>
      <div>
        <a target="__blank" href="https://twitter.com/segunflams"><vue-feather type="twitter" class="footer__icons"></vue-feather></a>
        <a target="__blank" href="https://www.linkedin.com/in/opeyemi-amusan-b0a2a8152/"><vue-feather type="linkedin" class="footer__icons"></vue-feather></a>
        <a target="__blank" href="https://github.com/netflams10"><vue-feather type="github" class="footer__icons"></vue-feather></a>
        <a target="__blank" href="mailto:name@segope44@gmail.com"><vue-feather type="mail" class="footer__icons"></vue-feather></a>
      </div>
    </div>
  </div>
</template>

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