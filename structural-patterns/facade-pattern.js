let orderNumber = 0;

class PlaceFoodOrder {
  placeOrder(orderDetails) {
    const orderId = PlaceFoodOrder.generateId();
    let chef;
    if (orderDetails.foodType === 'Main Course') {
      chef = new MainCourseChef();
    } else if (orderDetails.foodType === 'Dessert') {
      chef = new DessertChef();
    }
    return chef.addFoodOrder({ orderId, orderDetails });
  }

  static generateId() {
    return ++orderNumber;
  }
}

class FoodOrders {
  constructor() {
    this.orders = [];
  }
  addFoodOrder(order) {
    this.orders.push(order);
    return this.conveyOrder(order);
  }
  timeToMakeOrder() {}
  conveyOrder(order) {}
}

class MainCourseChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }
  timeToMakeOrder() {
    return Math.floor(Math.random() * 50) + 10;
  }
  conveyOrder({ orderId, orderDetails }) {
    const time = this.timeToMakeOrder();
    console.log(`Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`);
  }
}

class DessertChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }
  timeToMakeOrder() {
    return Math.floor(Math.random() * 30) + 10;
  }
  conveyOrder({ orderId, orderDetails }) {
    const time = this.timeToMakeOrder();
    console.log(`Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`);
  }
}

const customer = new PlaceFoodOrder();
const order1 = customer.placeOrder({ foodType: 'Main Course', foodDetails: 'Pasta with Shrimps' });
const order2 = customer.placeOrder({ foodType: 'Dessert', foodDetails: 'Molten Lava Cake' });
