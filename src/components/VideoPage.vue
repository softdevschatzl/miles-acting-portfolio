<template>
  <div class="container">
    <section id="videos" class="videos content-section">
      <h1>Videos</h1>
      <div class="videos" v-for="video in videos" :key="video.id">
        <a :href="video.downloadUrl">{{ video.name }}</a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'VideoPage',
    data() {
      return {
        // Replace with your actual Dropbox video links
        videos: [
          { id: 1, name: 'Video 1', downloadUrl: 'someLink' },
          { id: 2, name: 'Video 2', downloadUrl: 'someLink' },
          // Add more videos as needed
        ],
      }
    },
  }
</script>

<style scoped>
  h1{
    margin-bottom: 5vh;
  }

  .videos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 35vh;
    width: 20vw;
  }
</style>