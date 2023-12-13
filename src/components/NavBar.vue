<template>
    <nav class="navbar">
        <ul>
            <li><a href="#home" v-smooth-scroll>Home</a></li>
            <li><a href="#about" v-smooth-scroll>About</a></li>
            <li><a href="#contact" v-smooth-scroll>Contact</a></li>
            <li><a href="#gallery" v-smooth-scroll>Gallery</a></li>
            <li><a href="#resume" v-smooth-scroll>Resume</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
.navbar {
  text-align: center;
  margin: 10px 0;
}

.navbar ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  gap: 8vw;
}

.navbar ul li {
  display: inline;
  padding-left: 20px;
}

.navbar ul li a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  position: relative;
  display: inline-block;
}
.navbar ul li a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #333;
  visibility: hidden;
  transition: all 0.3s ease-in-out
}

.navbar ul li a:hover::after {
  visibility: visible;
  width: 100%;
}
</style>