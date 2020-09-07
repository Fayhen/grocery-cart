<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hello and Welcome to the Grocery Cart!</h1>
    <p>
      This is a little Vue application built with TypeScript and Vue 3's new
      Compositon API.
    </p>
    <p>
      It consists of a very simple shopping cart. Use the menu to navigate
      between grocery categories.
    </p>
    <p>Navigate to the cart to view and edit your selected items.</p>
    <p style="margin-top: 5rem;">
      Click <router-link to="/about">here</router-link> to learn more.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
a {
  color: #42b983;
  font-weight: bold;
}
</style>
