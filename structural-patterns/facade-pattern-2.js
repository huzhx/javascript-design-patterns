class Inventory {
  constructor() {
    this.shampoo = 20;
    this.conditioner = 20;
    this.hairSerum = 1000;
  }

  checkAvailability(productName) {
    switch (productName) {
      case 'shampoo':
        return this.shampoo;
      case 'conditioner':
        return this.conditioner;
      case 'hair serum':
        return this.hairSerum;
    }
  }
}

class BuyingProduct extends Inventory {
  buyProduct(product) {
    const { productName, amount } = product;
    const amountAvailable = this.checkAvailability(productName);
    let order;
    if (amountAvailable >= amount) {
      order = new BuyProduct();
    } else {
      order = new PreOrderProduct();
    }
    order.execute();
  }
}

class Order {
  constructor({ productName, amount }) {
    this.productName = productName;
    this.amount = amount;
  }
  execute() {}
}

class BuyProduct extends Order {
  constructor(product) {
    super(product);
    return this;
  }

  execute() {
    console.log(`${this.amount} bottles of ${this.productName} are available. Click on "buy" to purchase them.`);
  }
}

class PreOrderProduct extends Order {
  constructor(product) {
    super(product);
    return this;
  }
  execute() {
    console.log(
      `${this.amount} bottles of ${this.productName} are not available. You can Pre-order them on the next page.`
    );
  }
}
