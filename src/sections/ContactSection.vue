<template>
  <div class="row form-container">
    <div class=" col-6 form-container__form">
      <h4 class="form-container__header">Send me a message!</h4>
      <span>Got a question or proposal, or just want to say hello? Go ahead.</span>
      <div>
        <form>
          <form action="https://formspree.io/f/mgeqorgr" method="POST">
            <div class="row">
              <div class="col-md-6">
                <label>
                  Your Name:
                </label>
                <input type="email" name="email">
              </div>
              <div class="col-md-6">
                <label>
                  Your email:
                </label>
                <input type="email" name="email">
              </div>
            </div>
            
            <div>
              <label>
                Your message:
              </label>
              <textarea name="message"></textarea>
            </div>

            <div>
              <button type="submit" class="submit-button">
                <div class="submit-button__button">
                  <vue-feather type="arrow-right" class="footer__icons" />
                  <span>Now</span>
                </div>
              </button>
            </div>
          </form>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .form-container {
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
  }
</style>