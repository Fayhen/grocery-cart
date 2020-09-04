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

  getTotalPrice() {
    const items = [...this.items.values()];
    const sum: number = items.reduce((acc, { value, amount }) => {
      const newAmount: number = value * amount;
      return acc + newAmount;
    }, 0);

    return (this.totalAmount = sum);
  }

  addProduct(productId: string, product: CartItem) {
    this.items.set(productId, product);
  }

  removeProduct(productId: string) {
    this.items.delete(productId);
  }

  updateAmount(productId: string, amount: number) {
    const product = this.items.get(productId);
    if (product) {
      product.amount = amount;
      this.items.set(productId, product);
    }
  }

  clearCart() {
    this.items.clear();
  }
}
export { Cart as default };
