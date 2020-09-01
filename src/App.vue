<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/fruits">Fruits</router-link>
        </li>
        <li>
          <router-link to="/vegetables">Vegetables</router-link>
        </li>
        <li>
          <router-link to="/dairy">Dairy</router-link>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import rawData from './assets/products.json';

export default Vue.extend({
  
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
}

h1 {
  margin: 0;
}

nav {
  width: 5rem;
  height: 100vh;
  padding: 30px;
  position: fixed;
  background-color: #2c3e50;
}

nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

nav ul li {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
}

nav a {
  font-weight: bold;
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #f5f5dc;
}
</style>
