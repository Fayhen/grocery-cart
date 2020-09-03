<template>
  <div>
    <h1>{{ this.capitalize(category) }}</h1>
    <p>Browsing available products:</p>
    <store-item
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :description="product.description"
      :value="product.value"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import StoreItem from "../components/StoreItem.vue";
import fetchProducts from "../utils/fetchData";
import capitalize from "../utils/capitalize";

export default defineComponent({
  name: "StorePage",

  components: {
    StoreItem: StoreItem
  },

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
