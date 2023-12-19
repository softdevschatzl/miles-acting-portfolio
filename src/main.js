import { createApp } from 'vue';
import App from './App.vue';
import router from './router'

const app = createApp(App);

app.use(router);

app.mount('#app');

// Adding smooth scrolling functionality
app.directive('smooth-scroll', {
  mounted(el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (document.getElementById(this.getAttribute('href').substring(1))) {
        document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
});
