<template>
  <div>
    <h1>{{ productType }}</h1>
    <p>Browsing available products</p>
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
import fetchProducts from "../assets/fetchData";

export default defineComponent({
  name: "StorePage",

  props: {
    productType: {
      type: String,
      required: true
    }
  },

  setup(props) {
    // const hasProducts = ref(false);
    const products = ref([]);

    products.value = fetchProducts(props.productType);

    // if (products) {
    //   hasProducts.value = true;
    // }

    return { products };
  }
});
</script>
