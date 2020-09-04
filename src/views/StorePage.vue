<template>
  <div>
    <h1>{{ this.capitalize(category) }}</h1>
    <p>Browsing available products:</p>
    <div class="product-wrapper">
      <store-item
        class="store-item"
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :value="parseFloat(product.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import StoreItem from "@/components/StoreItem.vue";
import fetchProducts from "@/utils/fetchData";
import capitalize from "@/utils/capitalize";

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

<style scoped>
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.store-item {
  height: 15rem;
  width: 15rem;
  margin: 0.5rem;
  /* background-color: #76f8be; */
  background-color: #d8f7f7;
  transition: 200ms ease;
}
.store-item:hover {
  height: 15.5rem;
  width: 15.5rem;
  background-color: #b1fcda;
}
</style>
