<template>
  <nav class="navbar">
    <div class="nav-header">
      <h1>Miles</h1>
      <h1>Mann</h1>
    </div>
    <ul>
      <router-link class="nav-link" to="/" v-slot="{ isActive }">
        <div class="border" :class="{ 'active-link': isActive }">
          <li>Home</li>
        </div>
      </router-link>
      <router-link class="nav-link" to="/about" v-slot="{ isActive }">
        <div class="border" :class="{ 'active-link': isActive }">
          <li>About</li>
        </div>
      </router-link>
      <router-link class="nav-link" to="/contact" v-slot="{ isActive }">
        <div class="border" :class="{ 'active-link': isActive }">
          <li>Contact</li>
        </div>
      </router-link>
      <router-link class="nav-link" to="/gallery" v-slot="{ isActive }">
        <div class="border" :class="{ 'active-link': isActive }">
          <li>Gallery</li>
        </div>
      </router-link>
      <router-link class="nav-link" to="/resume" v-slot="{ isActive }">
        <div class="border" :class="{ 'active-link': isActive }">
          <li>Resume</li>
        </div>
      </router-link>
    </ul>
    <div class="space-taker"></div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
h1 {
  color: #cecece;
}
.nav-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  background-color: #4172a0;
  height: 100px;
  width: 100vw;
}

.navbar ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  gap: 2vw;
}

.navbar ul li {
  text-decoration: none !important;
  color: #cecece;
  font-weight: bold;
  position: relative;
}
.navbar ul li::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #333;
  visibility: hidden;
  transition: all 0.3s ease-in-out
}

.navbar ul li:hover::after {
  visibility: visible;
  width: 100%;
}

.border {
  border: 3px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
}

.active-link {
  border-color: black;
}

.router-link-active {
  text-decoration: none;
}
.router-link-exact-active,
.router-link-active {
  text-decoration: none;
}

.nav-link {
  text-decoration: none;
}

/* Mobile */
@media only screen and (max-width: 600px) {
  h1 {
    display: none;
  }
  .navbar {
    justify-content: center;
  }
  .navbar ul li {
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 14px;
  }
  .navbar ul {
    gap: 1vw;
  }
  .border {
    padding: 5px;
  }
  .space-taker {
    display: none;
  }
}
</style>
