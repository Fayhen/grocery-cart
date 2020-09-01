// class Product {
//   name: string;
//   description: string;
//   value: number;
//   productId: number;

//   constructor(
//     name: string,
//     description: string,
//     value: number,
//     productId: number
//   ) {
//     this.name = name;
//     this.description = description;
//     this.value = value;
//     this.productId = productId;
//   }
// };

class Product {
  constructor(
    public name: string,
    public description: string,
    public value: number,
    private productId: number
  ) {}
};

interface cartItem {
  name: string;
  value: number;
  amount: number;
  productId: number;
}

class Cart {
  items: Map<number, cartItem>;
  totalAmount: number;

  constructor(
    items: Map<number, cartItem> = new Map(),
    totalAmount: number = 0
  ) {
    this.items = items;
    this.totalAmount = totalAmount;
  };

  getTotalPrice() {
    const items = [...this.items.values()];
    let sum: number = items.reduce((acc, {value, amount}) => {
      const newAmount: number = value * amount;
      return acc + newAmount;
    }, 0);

    return sum;
  }

  addProduct(cartId:number, product: cartItem) {
    this.items.set(cartId, product);
  }

  removeProduct(cartId: number) {
    this.items.delete(cartId);
  }

  updateAmount(cartId: number, amount: number) {
    const product = this.items.get(cartId);
    if (product) {
      product.amount = amount;
      this.items.set(cartId, product);
    }
  }

  clearCart() {
    this.items.clear();
  }
}

export default {
  Product,
  Cart
}
