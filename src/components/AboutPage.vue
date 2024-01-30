<template>
  <div>
    <Head>
      <title>Miles Mann</title>
      <meta name="description" content="Miles Mann's Acting Portfolio" />
    </Head>
    <div>Hello world from your Vue project. Below is Builder Content:</div>
    <div v-if="canShowContent">
      <div>
        page title:
        {{ (content && content.data && content.data.title) }}
      </div>
      <Content 
        model="page"
        :content="content"
        :api-key="apiKey"
      />
    </div>
    <NotFound v-if="pageNotFound" />
  </div>
  <div class="container">
    <section id = "about" class="about content-section">
      <h1>About Me</h1>
      <div class="about-paras">
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
        <br>
        <br>Now its time for me to work in front of the camera.
        </p>
      </div>

      <h2>More Information</h2>
      <div class="socials">
        <div class="social">
          <a href="https://digitalcasting.agencyprosoftware.com/talentwebsite/index.php?srchpath=/milesmann" target="_blank">
            <img class="social-img" src="../assets/boston-casting-logo-remaster.png" alt="Boston Casting Logo">
          </a>
        </div>
        <div class="social">
          <a href="https://www.backstage.com/u/miles-mann/" target="_blank">
            <img class="social-img backstage" src="../assets/backstage-logo.svg" alt="Backstage Logo">
          </a>
        </div>
        <div class="social">
          <a href="https://www.imdb.com/name/nm15411233" target="_blank">
            <img class="social-img" src="../assets/imdb-logo.png" alt="IMDb Logo">
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  // OR use these if you are on Vue 3
  import { fetchOneEntry, Content, isPreviewing } from '@builder.io/sdk-vue/vue3';

// define vue component
export default {
  mame: 'AboutPage',
  data: () => ({
    // boolean to control showing content
    canShowContent: false,
    // content variable to store content from Builder
    content: null,
    // use your API key
    apiKey: process.env.VUE_APP_BUILDER_IO_API_KEY,
  }),
  // mounted() lifecycle hook called after component is in the DOM  
  mounted() {
    // get page model from space (specified by the Public API Key)
    // and the URL
    fetchOneEntry({
      model: 'page',
      apiKey: process.env.VUE_APP_BUILDER_IO_API_KEY, // <-- Replace with your Public API Key
      userAttributes: {
        urlPath: window.location.pathname,
      },
    }).then(res => {
      // sets content to results of `fetchOneEntry()`
      this.content = res;
      // If there's content or if the page is being viewed in the Visual Editor,
      // set canShowContent to true.
      this.canShowContent = this.content || isPreviewing();
    });
  },
  methods: {
    // method to check if page is not found
    pageNotFound() {
      return !this.content && !isPreviewing();
    },
    helpLinter() {
      return Content;
    }
  },
}
</script>

<style scoped>
  h1 {
    margin-top: 5vh;
    margin-bottom: 6vh;
  }

  p {
    width: 75%;
    text-align: left;
    margin-bottom: 20px;
    font-size: 18px;
  }

  h2 {
    margin-bottom: 10px;
  }
  a {
    margin-bottom: 40px;
  }

  .about-paras {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 5px solid black;
    border-top: 5px solid black;
    margin-bottom: 20px;
    padding: 20px;
  }

  .socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 20px;
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

  @media only screen and (max-width: 768px) {
    .about-paras {
      width: 100%;
    }
    p {
      width: 90%;
    }
    .socials {
      flex-direction: column;
    }
  }
</style>