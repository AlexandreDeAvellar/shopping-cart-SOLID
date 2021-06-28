import { ShoppingCart } from "./shopping-cart"

const shoppingCart = new ShoppingCart()
shoppingCart.addItem({ name: "Camisa", price: 49.362 })
shoppingCart.addItem({ name: "Calça", price: 56.99 })
shoppingCart.addItem({ name: "Short", price: 32.853 })
shoppingCart.addItem({ name: "Boné", price: 17.125 })

shoppingCart.removeItem(3)

console.log(shoppingCart.orderStatus)
console.log(shoppingCart.items)
console.log(shoppingCart.total())
shoppingCart.checkout()

console.log(shoppingCart.items)
console.log(shoppingCart.total())
console.log(shoppingCart.orderStatus)