<template>
  <div class="container">
    <header class="header">
      <h1>Miles Mann</h1>
      <h2>Actor</h2>
    </header>

    <main>
      <section id="home" class="headshot">
        <!-- Centered headshot of the actor -->
        <img src="../assets/miles_mann_picture.png" alt="Actor's Headshot">
      </section>
    </main>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'App',
  }
  </script>
  
<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  
  .header h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: normal;
  }
  .header {
    margin-right: 10vw;
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

  /* Mobile */
  @media only screen and (max-width: 600px) {
    .header h1 {
      font-size: 30px;
    }
    .header h2 {
      font-size: 20px;
    }
    .header {
      margin-right: 0;
      margin-bottom: 10vh;
    }
    .headshot {
      width: 200px;
    }
    .container {
      text-align: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 87vw;
    }
  }
</style>
  