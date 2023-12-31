<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
  }

  html {
    display: flex;
    justify-content: center;
    background-color: #686868;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
    padding: 20px;
    border: 4px solid #777;
    background-color: #cecece;
    min-height: 83vh;
    /** Box shadow */
    box-shadow: 0 6px 12px 0 rgba(0,0,0,0.9), 0 10px 30px 0 rgba(0,0,0,0.5) 0 10px 10px -5px rgba(0, 0, 0, 0.5);
  }

  /* Desktop */
  @media only screen and (min-width: 600px) {
    * {
      box-sizing: border-box;
    }
    .container {
      width: 1000px;
    }

    #app {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100vw;
      overflow-x: hidden;
    }
  }

  /* Mobile */
  @media only screen and (max-width: 600px) {
    .container {
      min-height: 82vh;
    }
  }
</style>
