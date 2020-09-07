interface CartItem {
  name: string;
  description: string;
  value: number;
  amount: number;
}

class Cart {
  // "items" property is a Map of [productId, CartItem]
  constructor(
    private cartId: number = Math.floor(Math.random() * (100 - 1 + 1) + 1),
    private totalAmount: number = 0,
    private items: Map<string, CartItem> = new Map()
  ) {
    this.cartId = cartId;
    this.totalAmount = totalAmount;
    this.items = items;
  }

  // Calculate total price for everything on the cart.
  getTotalPrice() {
    const items = [...this.items.values()];
    if (items.length === 0) {
      return (this.totalAmount = 0);
    }
    const sum: number = items.reduce((acc, { value, amount }) => {
      const newAmount: number = value * amount;
      return acc + newAmount;
    }, 0);

    return (this.totalAmount = sum);
  }

  // Modify the amount of a product on the cart. Set negative number to 0.
  updateAmount(productId: string, amount: number) {
    const product = this.items.get(productId);
    if (product) {
      const newAmount = product.amount + amount;
      product.amount = newAmount;
      this.items.set(productId, product);
    }
  }

  // Add a product to the cart. If it already exists, update its amount.
  addProduct(productId: string, product: CartItem) {
    const exists = this.items.get(productId);
    if (exists) {
      this.updateAmount(productId, product.amount);
    } else {
      this.items.set(productId, product);
    }
  }

  // Remove a product from the cart.
  removeProduct(productId: string) {
    this.items.delete(productId);
  }

  // Return map of products in cart.
  retrieveItems() {
    return this.items;
  }

  // Removes everything from the cart.
  clearCart() {
    this.items.clear();
  }

  getCartId() {
    return this.cartId;
  }
}
export { Cart as default };
