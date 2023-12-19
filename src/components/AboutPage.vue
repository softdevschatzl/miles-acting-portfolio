<template>
  <div class="container">
    <section id = "about" class="about content-section">
      <h1>About</h1>
      <p>Scenarium vitae, theatrum mundi, in hoc palco stellae nascuntur. Luminis et umbrae, gestus et vox, fabula cordis humani. Narratio incessabilis, persona in persona, vita in arte reflectitur.</p>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'AboutPage',
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 30vh;
  }

  p {
    width: 75%;
    text-align: center;
  }

  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30vh;
  }
</style>