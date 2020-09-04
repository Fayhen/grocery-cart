<template>
  <div>
    <h1>Cart</h1>
    <p class="no-items">You have not added items to cart yet.</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/state/store";

export default Vue.extend({
  name: "Cart",

  setup() {
    console.log(store);

    return {};
  }
});
</script>
