<template>
  <div>
    <h1>Cart</h1>
    <p v-show="noItems">
      You have not added items to cart yet. Added items will appear below.
    </p>
    <div v-show="!noItems" class="table-wrapper">
      <div class="trow theader">
        <div class="tcol">Name</div>
        <!-- <div class="tcol">Description</div> -->
        <div class="tcol">Amount</div>
        <div class="tcol">Price</div>
        <div class="tcol">Total</div>
        <div class="tcol">Edit</div>
      </div>
      <div class="trow" v-for="product in products" :key="product.id">
        <div class="tcol">{{ product.name }}</div>
        <!-- <div class="tcol">{{ product.description }}</div> -->
        <div class="tcol">{{ product.amount }}</div>
        <div class="tcol">$ {{ product.value.toFixed(2) }}</div>
        <div class="tcol">
          $ {{ (product.amount * product.value).toFixed(2) }}
        </div>
        <div class="tcol buttons-cell">
          <div class="arrows">
            <div @click="increment(product.id)">
              <i class="material-icons">keyboard_arrow_up</i>
            </div>
            <div @click="decrement(product.id, parseInt(product.amount))">
              <i class="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
          <div class="button" @click="deleteItem(product.id)">
            <i class="material-icons" style="font-size: 36px">delete_outline</i>
          </div>
        </div>
      </div>
      <div class="trow tfooter">
        <div class="tcol">
          Total sum: <strong>$ {{ totalAmout.toFixed(2) }}</strong>
        </div>
        <div class="tcol buttons-cell">
          <div class="button" @click="checkout()">
            <i class="material-icons" style="font-size: 36px">
              check_circle
            </i>
          </div>
          <div class="button" @click="clearCart()">
            <i class="material-icons" style="font-size: 36px">
              remove_shopping_cart
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import store from "@/state/store";

export default defineComponent({
  name: "Cart",

  methods: {
    checkout() {
      alert("Purchase complete!");
      this.clearCart();
      this.$router.push("/");
    }
  },

  setup() {
    interface Product {
      id: string;
      name: string;
      description: string;
      value: number;
      amount: number;
    }

    const noItems = ref<boolean>(true);
    const products = ref<Product[]>([]);
    const totalAmout = ref<number>(0);

    const hasItems = () => {
      if (products.value.length >= 1) {
        noItems.value = false;
      } else {
        noItems.value = true;
      }
    };

    const refreshCart = () => {
      products.value = [];
      const currentItems = ref(store.retrieveItems());
      currentItems.value.forEach((product, id) => {
        products.value.push({ id, ...product });
        totalAmout.value = store.getTotalPrice();
        hasItems();
      });
    };

    const increment = (productId: string) => {
      store.updateAmount(productId, 1);
      refreshCart();
    };

    const decrement = (productId: string, amount: number) => {
      if (amount > 1) {
        store.updateAmount(productId, -1);
        refreshCart();
      }
    };

    const deleteItem = (productId: string) => {
      store.removeProduct(productId);
      refreshCart();
      hasItems();
    };

    const clearCart = () => {
      store.clearCart();
      refreshCart();
      hasItems();
    };

    // const checkout = () => {
    //   alert("Purchase complete!");
    //   clearCart();
    //   router.
    // };

    refreshCart();

    return {
      products,
      totalAmout,
      noItems,
      increment,
      decrement,
      deleteItem,
      clearCart
    };
  }
});
</script>

<style scoped>
.theader {
  color: #42b983 !important;
  background-color: #344a61 !important;
  font-weight: bold;
  font-size: 1.15rem;
}
.trow {
  height: 2.75rem;
  width: 99%;
  padding: 0;
  margin-bottom: 0.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #344a61;
}
.trow:hover {
  width: 100%;
  background-color: #9cd8bd;
}
.tcol {
  width: 15vw;
}
.tfooter {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: #9cd8bd;
}
.tfooter:hover {
  background-color: #42b983;
}
.buttons-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.button {
  cursor: pointer;
}
.tfooter .button {
  margin-right: 1rem;
  margin-left: 1rem;
}
.arrows {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.arrows div {
  height: 49%;
  cursor: pointer;
}
</style>
