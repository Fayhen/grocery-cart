<template>
  <div class="wrapper">
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
    <p>$ {{ value.toFixed(2) }}</p>
    <div class="buttons-wrapper">
      <div class="arrows">
        <div @click="increment()">
          <i class="material-icons">keyboard_arrow_up</i>
        </div>
        <div @click="decrement()">
          <i class="material-icons">keyboard_arrow_down</i>
        </div>
      </div>
      <div class="amount-area">
        <p>
          Add <strong>{{ count }}</strong> to cart
        </p>
      </div>
      <div class="add-button" @click="add()">
        <i class="material-icons">{{ icon }}</i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import capitalize from "@/utils/capitalize";
import state from "@/state/store";

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
      type: Number,
      required: true
    }
  },
  setup(props) {
    const count = ref<number>(0);
    const icon = ref<string>("add_shopping_cart");

    const increment = () => {
      return count.value++;
    };

    const decrement = () => {
      if (count.value > 1) {
        return count.value--;
      }
    };

    const swapIcon = () => {
      icon.value = "done";
      setTimeout(() => {
        return (icon.value = "add_shopping_cart");
      }, 1100);
    };

    const add = () => {
      const { id, name, description, value } = props;
      const amount: number = count.value;
      if (amount >= 1) {
        state.addProduct(id, { name, description, value, amount });
        state.getTotalPrice();

        return (count.value = 0), swapIcon();
      } else {
        console.log("No items to add.");
      }
    };

    return { count, icon, increment, decrement, add };
  }
});
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  margin-top: 1rem;
}
.wrapper {
  height: 100%;
  width: 99%;
  display: flex;
  flex-direction: column;
}
.buttons-wrapper {
  height: 2.6rem;
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #42b983;
  background-color: #2c3e50;
}
.add-button {
  height: 100%;
  width: 2.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrows {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 0.5rem;
}
.arrows div {
  height: 49%;
  cursor: pointer;
}
.add-button:hover,
.arrows div:hover {
  background-color: #505c68;
}
</style>
