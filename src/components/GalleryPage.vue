<template>
  <div class="container">
    <section id="gallery" class="gallery content-section">
      <h1>Gallery</h1>
      <Slideshow class="gallery-el"/>
    </section>
  </div>
</template>

<script>
  import Slideshow from './SlideShow.vue';

  export default {
    name: 'GalleryPage',
    components: {
      Slideshow,
    }
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 5vh;
  }
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50vw;
  }

  /* Mobile */
  @media only screen and (max-width: 600px) {
    .gallery {
      width: 350px;
    }
    .container {
      width: 88vw;
    }
  }
</style>