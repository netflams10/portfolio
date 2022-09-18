<template>
  <div class="contact">
    <span class="header">Send me a message!</span>
    <span class="sub-header">Got a question or proposal, or just want to say hello? Go ahead.</span>
      <form action="https://formspree.io/f/mgeqorgr" method="POST" class="form-container">
          <div class="self-info">
            <div class="self-info_container">
              <label>
                Your Name:
              </label>
              <input type="email" name="email" placeholder="Enter Name">
            </div>
            <div class="self-info_container">
              <label>
                Your email:
              </label>
              <input type="email" name="email" placeholder="Enter email">
            </div>
          </div>
          <div class="textarea-container">
            <div class="textarea-container__input">
              <label>
                Your message:
              </label>
              <textarea name="message" placeholder="Enter Message"></textarea>
            </div>
          </div>

          <div class="button_container">
            <button type="submit">
              <div class="submit-button__button">
                <vue-feather type="arrow-right" class="footer__icons" />
                <span>Send Now</span>
              </div>
            </button>
          </div>
      </form>
  </div>
</template>

<style scoped>
  /* .form-container {
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    text-align: center;
  }
  .form-container__form {
    padding: 20px 0;
  }
  .submit-button {
    border: none;
    padding: 6px 40px;
  }
  label {
    display: block;
  }
  .submit-button__button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white
  } */
</style>