<template>
  <div>
    <Head>
    <!-- Make sure to give your page a title and description in Builder -->
      <title :title="computedTitle"></title>
      <meta name="description" :content="computedDescription" />
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
</template>

<script>
  import { fetchOneEntry, Content, isPreviewing } from '@builder.io/sdk-vue';
  import NotFound from './NotFound.vue';

  // define vue component
  export default {
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
  }
</script>