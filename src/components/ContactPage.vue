<template>
  <div class="container">
    <section id="contact" class="contact content-section">
      <h1>Contact Me</h1>
      <div class="contact-form" data-v-scroll="fade-in">
            <h3>Send me a message!</h3>
            <form @submit.prevent="sendMessage">
                <div class = "name-box">
                    <label for="name">Name:</label>
                    <input class = "name first" v-model="contact.name" id="name" type="text" aria-required="true" placeholder="First" />
                    <input class = "name last" v-model="contact.name" id="name" type="text" aria-required="true" placeholder="Last" />
                </div>
                
                <div class = "message-box">
                    <label for="message">Message:</label>
                    <textarea v-model="contact.message" id="message" required></textarea>
                </div>
                
                <button type="submit" class = "send-button">Send</button>
            </form>
        </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        contact: {
          name: '',
          message: ''
        }
      };
    },
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 30vh;
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30vh;
  }

  form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
    .contact-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .name-box {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .name-box input {
        height: 30px;
        padding: 10px;
        width: 200px;
        margin-bottom: 10px;
        /* border-radius: 20px; */
        background-color: #dddddd;
        font-family: Arial, Helvetica, sans-serif;
    }
    .message-box {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 200px;
    }
    .message-box textarea {
        height: 100px;
        padding: 10px;
        /* border-radius: 20px; */
        background-color: #dddddd;
        font-family: Arial, Helvetica, sans-serif;
    }
    .send-button {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 10vw;
        height: 3vh;
        padding: 5px;
        border-radius: 20px;
        background-color: #dddddd;
        transition: opacity 0.3s ease-in-out;
        color: black;
    }
    .send-button:hover {
        opacity: 0.7;
    }
</style>