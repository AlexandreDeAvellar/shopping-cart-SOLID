import { Messaging } from "./services/messaging"
import { Order } from "./classes/order"
import { Persistency } from "./services/persistency"
import { Product } from "./classes/product"
import { ShoppingCart } from "./classes/shopping-cart"
import { FiftyPercentDiscount, NinetyNinePercentDiscount, NoDiscount, TenPercentDiscount } from "./classes/discount"

const tenPercentDiscount = new TenPercentDiscount
const fiftyPercentDiscount = new FiftyPercentDiscount
const ninetyNinePercentDiscount = new NinetyNinePercentDiscount
const noDiscount = new NoDiscount
const shoppingCart = new ShoppingCart(fiftyPercentDiscount)
const messaging = new Messaging
const persistency = new Persistency
const order = new Order(shoppingCart, messaging, persistency)

// shoppingCart.addItem(new Product("Camisa", 49.362))
// shoppingCart.addItem(new Product("Calça", 56.99))
// shoppingCart.addItem(new Product("Short", 32.853))
// shoppingCart.addItem(new Product("Boné", 17.125))
shoppingCart.addItem(new Product("Camisa", 10))
shoppingCart.addItem(new Product("Calça", 20))
shoppingCart.addItem(new Product("Short", 30))
shoppingCart.addItem(new Product("Boné", 40))

shoppingCart.removeItem(3)

console.log(order.orderStatus)
console.log(shoppingCart.items)
console.log(shoppingCart.total())
order.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)