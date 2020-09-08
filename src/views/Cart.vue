<template>
  <div>
    <h1>Cart</h1>
    <p v-show="noItems">
      You have not added items to cart yet. Added items will appear below.
    </p>
    <div v-show="!noItems" class="table-wrapper">
      <div class="trow theader">
        <div class="tcol">Name</div>
        <div class="tcol">Amount</div>
        <div class="tcol">Price</div>
        <div class="tcol">Sum</div>
        <div class="tcol">Edit</div>
      </div>
      <div class="trow" v-for="product in products" :key="product.id">
        <div class="tcol">{{ product.name }}</div>
        <div class="tcol">{{ product.amount }}</div>
        <div class="tcol">$ {{ product.value.toFixed(2) }}</div>
        <div class="tcol total-cell">
          $ {{ (product.amount * product.value).toFixed(2) }}
        </div>
        <div class="tcol buttons-wrapper">
          <div class="arrows button">
            <div @click="increment(product.id)">
              <i class="material-icons">keyboard_arrow_up</i>
            </div>
            <div @click="decrement(product.id, parseInt(product.amount))">
              <i class="material-icons">keyboard_arrow_down</i>
            </div>
          </div>
          <div class="button" @click="deleteItem(product.id)">
            <i class="material-icons" style="font-size: 36px;">
              delete_outline
            </i>
          </div>
        </div>
      </div>
      <div class="trow tfooter">
        <div class="tcol"></div>
        <div class="tcol"></div>
        <div class="tcol"></div>
        <div class="tcol total-cell">
          <span style="padding-right: 0.2em;">Total:</span>
          <span style="font-weight: bold;">$ {{ totalAmout.toFixed(2) }}</span>
        </div>
        <div class="tcol buttons-wrapper">
          <div class="button" @click="checkout(), $emit('checkout')">
            <i class="material-icons" style="font-size: 36px;">
              check_circle_outline
            </i>
          </div>
          <div class="button" @click="clearCart()">
            <i class="material-icons" style="font-size: 36px;">
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

  // methods: {
  //   checkout() {
  //     store.makeRequestData();
  //     alert("Purchase complete!");
  //     // this.clearCart();
  //     this.$router.push("/");
  //   }
  // },

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

    const checkout = () => {
      const cartId = store.getCartId();
      const requestData = { cartId, products: products.value };
      // eslint-disable-next-line
      console.log(JSON.stringify(requestData));
      clearCart();

      return alert("Purchase complete!");
    };

    refreshCart();

    return {
      products,
      totalAmout,
      noItems,
      increment,
      decrement,
      deleteItem,
      clearCart,
      checkout
    };
  }
});
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
}
.table-wrapper {
  width: 90%;
}
.theader {
  font-weight: bold;
  font-size: 1.15rem;
}
.trow {
  height: 2.75rem;
  width: 99%;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-shrink: 1;
  align-items: center;
  color: #344a61;
  transition: margin 200ms ease-in-out;
}
.trow:hover {
  width: 100%;
  margin: 0.1rem 0 0.1rem 0.25rem;
}
.trow:first-child:hover {
  width: 99%;
  margin: 0;
}
.tcol {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-basis: 20%;
  align-items: center;
  justify-content: center;
}
.tcol:last-child {
  flex-basis: 6rem;
}
.buttons-wrapper {
  color: #344a61;
  background-color: #42b983;
}
.button {
  height: 100%;
  width: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:hover {
  background-color: #9cd8bd;
}
.arrows {
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.arrows div {
  display: flex;
  justify-content: center;
}
.total-cell {
  background-color: #69d6a5;
}
.total-cell:hover {
  font-weight: bold;
}
.theader .tcol {
  color: #42b983;
  background-color: #344a61;
}
.tfooter .buttons-wrapper,
.tfooter .total-cell {
  margin-top: 0.1rem;
  color: #42b983;
  background-color: #344a61;
}
.tfooter .total-cell:hover,
.tfooter .button:hover {
  color: #28f096;
  background-color: #344a61;
}
</style>
