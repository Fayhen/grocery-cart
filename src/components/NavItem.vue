<template>
  <p>{{ title }}</p>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "NavItem",
  props: {
    title: String
  }
});
</script>

<style scoped>

</style>
