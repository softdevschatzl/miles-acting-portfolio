<template>
  <div class="container">
    <section id="contact" class="contact content-section">
      <h1>Contact Me</h1>
      <div class="content">
        <div class="contact-form" data-v-scroll="fade-in">
            <h3>Get in Touch</h3>
            <form @submit.prevent="sendMessage">
                <div class = "name-box">
                    <label for="name">Name:</label>
                    <input class = "name first" v-model="contact.name" id="name" type="text" aria-required="true" placeholder="First" />
                    <input class = "name last" v-model="contact.name" id="name" type="text" aria-required="true" placeholder="Last" />
                </div>

                <div class = "email-box">
                    <label for="email">Email:</label>
                    <input v-model="contact.email" id="email" type="email" required />
                </div>

                <div class = "message-box">
                    <label for="message">Message:</label>
                    <textarea v-model="contact.message" id="message" required></textarea>
                </div>
                
                <button type="submit" class = "send-button">Send</button>
            </form>
        </div>
        <div class="profile-picture">
          <img class="profile" src="../assets/miles_mann_picture.png" alt="Actor's Headshot">
        </div>
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
          email: '',
          message: ''
        }
      };
    },
    methods: {
      async sendMessage() {
        try {
          const response = await fetch("https://formspree.io/f/mrgnblyl", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.contact),
          });

          if (response.ok) {
            window.alert("Message sent successfully!");
            this.contact.name = "";
            this.contact.email = "";
            this.contact.message = "";
          } else {
            console.error("Message failed to send.");
          }
        } catch (error) {
          console.error("An error occurred while sending the message.", error);
        }
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 20vh;
  }
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10vh;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
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
    margin-bottom: 10px;
    width: 100%;
  }
  .email-box {
    width: 100%;
  }
  .name-box input {
    height: 30px;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    /* border-radius: 20px; */
    background-color: #dddddd;
    font-family: Arial, Helvetica, sans-serif;
  }
  .email-box input {
    height: 30px;
    padding: 10px;
    width: 100%;
    /* border-radius: 20px; */
    background-color: #dddddd;
    font-family: Arial, Helvetica, sans-serif;
  }
  .message-box {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
  .message-box textarea {
    height: 100px;
    padding: 10px;
    width: 100%;
    /* border-radius: 20px; */
    background-color: #dddddd;
    font-family: Arial, Helvetica, sans-serif;
  }
  .send-button {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 30px;
    padding: 5px;
    border-radius: 20px;
    background-color: #dddddd;
    transition: opacity 0.3s ease-in-out;
    color: black;
  }
  .send-button:hover {
    opacity: 0.6;
  }

  .profile {
    width: 300px;
    /* height: 500px; */
  }

  @media only screen and (max-width: 600px) {
    h1 {
      margin-bottom: 10vh;
    }
    .content {
      flex-direction: column;
    }
    .contact-form {
      width: 100%;
    }
    .profile {
      display: none;
    }
  }
</style>