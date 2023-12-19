<template>
  <div class="container">
    <section id="resume" class="resume content-section">
      <h1>Resume</h1>
      <iframe
        :src="pdfUrl"
        :frameborder="'0'"
        width="100%"
        style="border: 1px solid #ddd;"
      ></iframe>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        pdfUrl: process.env.BASE_URL + '/Miles-Mann-resume20231029.pdf',
      }
    }
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 5vh;
  }
  .resume {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    width: 50vw;
  }

  iframe {
    margin-top: 20px;
    height: 600px;
    border: none;
    overflow: auto;
  }

  /* Mobile */
  @media only screen and (max-width: 600px) {
    .resume {
      width: 300px;
    }
    .container {
      width: 88vw;
    }
  }
</style>