<template>
  <div id="slider">
    <div class="curr-img">
          <img v-bind:src="currimg" @click="modalThis" :key="currimg" class="animated  fadeInDown">
    </div>
    <div class="thumbs">
      <div class="thumb mobile-control left-mobile" @click="toLeft">&#x2039;</div>
      <div class="thumb thumbnail" v-for="(img, index) in images.slice(0, getNumberOfThumbnails())" :key="index" @click="setCurrent(index)" :class="{'hide-mobile': shouldHideThumbnail(index)}">
        <img v-bind:src="img" >
      </div>
      <div class=" thumb mobile-control right-mobile" @click="toRight">&#x203A;</div>
    </div>
    <div class="picmod" v-show="showmodal">
      <img v-bind:src="currimg">
      <div class="close-mod" @click="showmodal=!showmodal" >&#9587;</div>
    </div>
    <div class="slider-controls">
      <div class="left" @click="toLeft">&#x2039;</div>
      <div class="right" @click="toRight">&#x203A;</div>
    </div>
  </div>
</template>

<script>
// import Heron from '../assets/heron.jpeg';
// import Banana from '../assets/banana.jpeg'; sample pictures.
// import Plant from '../assets/plant.jpeg';
// import Shells from '../assets/shells.jpeg';
import Miles from '../assets/miles_mann_picture.png';
import Miles2 from '../assets/Miles-Mann-1.png';
import Miles3 from '../assets/Miles-Mann-FullBody-.png';
import Miles4 from '../assets/Miles-Mann-CasualFullBody.png';

var images = [Miles, Miles2, Miles3, Miles4];

export default {
  data() {
    return {
      images: images,
      currimg: images[0],
      showmodal: false,
    }
  },
  methods: {
    setCurrent: function(index){
      this.currimg = images[index];
      if(index >= 2 ){
        images.push(images[0]);
        images.shift();
      }
      if(index <= 2 ){
        images.unshift(images[images.length - 1 ]);
        images.pop();
      }
      if(index < 0 ){
        this.currimg = images[images.length - 1 ];
      }

    },
    modalThis: function(){
      this.showmodal = true;
    },
    toLeft: function(){
        this.setCurrent(images.indexOf(this.currimg)-1)
    },
    toRight: function(){
      this.setCurrent(images.indexOf(this.currimg)+1)
    },
    isMobileControls: function(index) { // if first or last image and mobile.
      return (index === 0 || index === images.length - 1) && window.innerWidth <= 600;
    },
    shouldHideThumbnail: function(index) { // only show two images on mobile.
      return window.innerWidth <= 600 && index >= 2;
    },
    getNumberOfThumbnails: function() {
      return window.innerWidth <= 600 ? 2 : 4;
    }
  },
  computed: function(){

  }
}
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #slider {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    max-width: 760px;
    position: relative;
  }
  #slider img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: inline;
  }

  .curr-img {
    padding: 14px; 
    margin: 0 10px;
    border: 3px solid rgb(100, 100, 100);;
    border-radius: 10px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .thumbs{
    display: flex;
    flex-wrap: no-wrap;
  }
  .thumb {
    min-width: calc(25% - 20px);
    padding: 14px; 
    margin: 10px;
    border: 3px solid rgb(100, 100, 100);
    border-radius: 10px;
    height: 55px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .picmod {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #808080eb;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5%;
    z-index: 10000000000;
    top: 0;
    left: 0;
  }
  .picmod img {
    max-height: 70vh;   
  }
  .close-mod {
    position: fixed;
    top: 20px;
    right: 30px;
    color: white;
    cursor: pointer;
  }

  .mobile-control {
    display: none;
  }

  .hide-mobile {
    display: none;
  }

  .thumbnail {
    min-width: calc(25% - 20px);
  }

  .slider-controls {
    display: none;
    justify-content: space-between;
  }

  .slider-controls div {
    position: absolute;
    top: calc(40% - 20px);
    border: 3px solid rgb(100, 100, 100);
    cursor: pointer;
    color: black;
    font-size: 24px;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: sans-serif;
  }
  .slider-controls .left{
    left: 20px;
  }
  .slider-controls .right{
    right: 20px;
  }

  @media(min-width: 450px) {
    .curr-img {
      height: 415px;
    }
    .thumb {
      height: 105px;
    }
  }

  @media(min-width: 600px){
    .slider-controls {
      display: flex;
    }  
  }

  /* Desktop */
  @media only screen and (min-width: 768px) {
    .slider-controls .left-mobile,
    .slider-controls .right-mobile{
      display: none;
    }
    .mobile-control {
      display: none;
    }
  }

  /* Mobile */
  @media only screen and (max-width: 768px) {
    .slider-controls .left,
    .slider-controls .right{
      display: none;
    }
    .mobile-control {
      display: flex;
      font-size: 30px;
      align-items: center;
    }
  }
</style>
