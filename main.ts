import { Messaging } from "./messaging"
import { Order } from "./order"
import { Persistency } from "./persistency"
import { Product } from "./product"
import { ShoppingCart } from "./shopping-cart"

const shoppingCart = new ShoppingCart()
const messaging = new Messaging
const persistency = new Persistency
const order = new Order(shoppingCart, messaging, persistency)

shoppingCart.addItem(new Product("Camisa", 49.362))
shoppingCart.addItem(new Product("Calça", 56.99))
shoppingCart.addItem(new Product("Short", 32.853))
shoppingCart.addItem(new Product("Boné", 17.125))

shoppingCart.removeItem(3)

console.log(order.orderStatus)
console.log(shoppingCart.items)
console.log(shoppingCart.total())
order.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(order.orderStatus)