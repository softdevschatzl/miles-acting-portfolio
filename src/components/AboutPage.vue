<template>
  <div class="container">
    <section id = "about" class="about content-section">
      <h1>About Me</h1>
      <p>Born and raised in Massachusetts, just outside of Boston, along the Charles River.
      By age 6, I knew all the subway stops on the Green line from Riverside to downtown Boston. And I could
      easily find my way from Park Street Station to my favorite Boston stores (Jordan Marsh and Filenes).
      </p>
      <p>As a kid I wanted to be either an Actor or an Astronaut.
      Since I was not able to afford good colleges, I was never able to get the Astronaut required PHD.
      However, I found a back-door into the Russian Space Program.
      I was able to build and fly 4 home-made educational Amateur Radio projects into space.
      Three projects were installed on the Russian Space Station Mir [1997-2000] and one project was installed on
      the International Space Station [Slow Scan TV, 2004-2006].
      </p>
      <p>I am done with the Software/Imaging and Space Station projects.
      Now I am focusing my energies on Acting!
      Since my father was a photographer, I learned how to take-pictures and develop/print my own film in grade
      school. In the 1990’s I switched from Film to Digital cameras and Video cameras.
      Now its time for me to work in front of the camera.
      </p>

      <div class="socials">
        <div class="social">
          <h2>Boston Casting</h2>
          <a href="www.agencyprotalent.com/milesmann" target="_blank">
            <img class="social-img" src="../assets/boston-casting-logo.png" alt="Boston Casting Logo">
          </a>
        </div>
        <div class="social">
          <h2>Backstage</h2>
          <a href="https://www.backstage.com/u/miles-mann/" target="_blank">
            <img class="social-img backstage" src="../assets/backstage-logo.svg" alt="Backstage Logo">
          </a>
        </div>
        <div class="social">
          <h2>IMDb</h2>
          <a href="https://www.imdb.com/name/nm15411233" target="_blank">
            <img class="social-img" src="../assets/imdb-logo.png" alt="IMDb Logo">
          </a>
        </div>
      </div>
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
    margin-top: 5vh;
    margin-bottom: 15vh;
  }

  p {
    width: 75%;
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
  }

  h2 {
    margin-bottom: 10px;
  }
  a {
    margin-bottom: 40px;
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
  }
  .social-img {
    width: 150px;
    transition: 0.3s ease-in-out;
  }
  .backstage {
    margin-top: 10px;
  }

  .social-img:hover {
    transform: scale(1.1);
  }

  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>