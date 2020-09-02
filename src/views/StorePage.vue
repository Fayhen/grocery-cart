<template>
  <div>
    <h1>{{ this.capitalize(category) }}</h1>
    <p>Browsing available products:</p>
    <ul>
      <li v-for="product in products" :key="product.id">
        <p>Product: {{ product.name }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Value: {{ product.value }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import fetchProducts from "../utils/fetchData";
import capitalize from "../utils/capitalize";

export default defineComponent({
  name: "StorePage",

  methods: {
    capitalize: capitalize
  },

  props: {
    category: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const products = ref([]);
    products.value = fetchProducts(props.category);

    return { products };
  }
});
</script>
