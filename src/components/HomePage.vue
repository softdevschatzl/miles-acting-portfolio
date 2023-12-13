<template>
  <div class="app">
    <div class="container">
      <header class="header">
        <h1>Miles Mann</h1>
        <Navbar />
      </header>
  
      <main>
        <section id="home" class="headshot">
          <!-- Centered headshot of the actor -->
          <img src="../assets/miles_mann_picture.png" alt="Actor's Headshot">
        </section>
  
        <section id="about" class="content-section">
          <h1>About Me</h1>
          <p>Scenarium vitae, theatrum mundi, in hoc palco stellae nascuntur. Luminis et umbrae, gestus et vox, fabula cordis humani. Narratio incessabilis, persona in persona, vita in arte reflectitur.</p>
        </section>
  
        <section id="contact" class="content-section">
          <h1>Contact</h1>
          <p>Scenarium vitae, theatrum mundi, in hoc palco stellae nascuntur. Luminis et umbrae, gestus et vox, fabula cordis humani. Narratio incessabilis, persona in persona, vita in arte reflectitur.</p>
        </section>
  
        <section id="gallery" class="content-section">
          <h1>Gallery</h1>
          <Slideshow />
        </section>

        <section id="resume" class="content-section">
          <h1>Resume</h1>
          <iframe
            :src="pdfUrl"
            :frameborder="'0'"
            width="100%"
            style="border: 1px solid #ddd;"
          ></iframe>
        </section>
      </main>
    </div>
  </div>
</template>
  
  <script>
  import Navbar from './NavBar.vue';
  import Slideshow from './SlideShow.vue';
  
  export default {
    name: 'App',
    components: {
      Navbar,
      Slideshow,
    },
    data() {
      return {
        pdfUrl: '/Miles-Mann-resume20231029.pdf',
      }
    }
  }
  </script>
  
  <style>
  .app {
    background-color: #f8f8f8;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f8f8f8;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    border: 4px solid #777;
    background-color: #f8f8f8;

    /** Box shadow */
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.9), 0 10px 30px 0 rgba(0,0,0,0.5);
  }
  
  .header h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: normal;
  }
  
  .headshot {
    text-align: center;
    padding: 20px;
    width: 300px;
  }
  
  .headshot img {
    max-width: 100%;
    height: auto;
    border-radius: 5px; /* If you want rounded corners */
    border: 5px solid #777;
  }
  
  .content-section {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px 0;
    padding: 20px;
    width: 80%;
    background-color: #c9c9c9; /* Light gray background */
  }

  iframe {
    margin-top: 20px;
    height: 600px;
    border: none;
    overflow: auto;
  }
  
  /* Additional styling */
  </style>
  