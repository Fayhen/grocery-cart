<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <p>$ {{ value }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import capitalize from "../utils/capitalize";

export default defineComponent({
  name: "StoreItem",
  methods: {
    capitalize: capitalize
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
});
</script>
