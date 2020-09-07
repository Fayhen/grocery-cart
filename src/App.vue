<template>
  <div id="app">
    <nav>
      <div class="outer-border" />
      <ul>
        <router-link to="/cart" :cart="myCart">
          <li>
            <div class="nav-element">
              <i class="material-icons" style="font-size: 48px">
                shopping_cart
              </i>
            </div>
            <div class="link-container">
              My Cart
            </div>
          </li>
        </router-link>
        <router-link
          v-for="(category, idx) in categories"
          :key="idx"
          :to="{ path: category }"
        >
          <li>
            <div class="nav-element">
              <i class="material-icons" style="font-size: 48px">storefront</i>
            </div>
            <div class="link-container">
              {{ capitalize(category) }}
            </div>
          </li>
        </router-link>
        <router-link to="/">
          <li>
            <div class="nav-element">
              <i class="material-icons" style="font-size: 48px">home</i>
            </div>
            <div class="link-container">
              Home
            </div>
          </li>
        </router-link>
      </ul>
    </nav>
    <router-view class="main-view" :key="$route.path" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ref } from "@vue/composition-api";
import store from "@/state/store";
import rawData from "@/assets/products.json";
import capitalize from "@/utils/capitalize";

export default Vue.extend({
  methods: {
    capitalize: capitalize
  },

  setup() {
    const categories = ref(Object.keys(rawData));
    const myCart = store;
    console.log(myCart);

    return { categories, myCart };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 500px;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
body::-webkit-scrollbar {
  width: 0.25rem;
}
body::-webkit-scrollbar:horizontal {
  height: 0.25rem;
}
body::-webkit-scrollbar-thumb {
  background: #c6e6e6;
}
body::-webkit-scrollbar-track {
  background: #2c3e50;
}
h1 {
  margin: 0;
}
nav {
  padding: 0;
  position: fixed;
  background-color: #2c3e50;
  transition: width 200ms ease;
}
nav ul {
  padding: 0;
  margin: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
}
nav ul li {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5rem;
}
nav ul li:hover {
  background-color: #344a61;
}
nav ul li:hover .nav-element {
  background-color: #9cd8bd;
}
nav a {
  color: #42b983;
  font-weight: bold;
  text-decoration: none;
}
nav a:last-child {
  margin-top: auto;
}
nav a.router-link-exact-active {
  color: #f5f5dc;
}
.nav-element {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  background-color: #69d6a5;
}
.outer-border {
  position: fixed;
  background-color: #42b983;
  z-index: -1;
}
.main-view {
  margin-left: 5rem;
  padding: 1rem;
  padding-bottom: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  nav {
    bottom: 0;
    width: 100%;
    height: 5rem;
  }
  nav ul {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  nav .link-container {
    display: none;
  }
  .nav-element {
    height: 5rem;
    width: 5rem;
  }
  .outer-border {
    bottom: 0;
    height: 5rem;
    width: 100vw;
  }
  .main-view {
    margin-left: 0;
  }
}

@media only screen and (min-width: 600px) {
  nav {
    top: 0;
    padding: 0;
    width: 5rem;
    height: 100vh;
  }
  nav .link-container {
    display: none;
    margin-left: 1rem;
  }
  nav:hover {
    width: 19rem;
  }
  nav:hover .link-container {
    display: block;
  }
  .nav-element {
    height: 100%;
    width: 5rem;
  }
  .outer-border {
    top: 0;
    left: 0;
    width: 5rem;
    height: 100vh;
  }
}
</style>
