import { CartItem } from "./types/CartItem"
import { OrderStatus } from "./types/OrderStatus"

export class ShoppingCart {
    private readonly _items: CartItem[] = []
    private _orderStatus: OrderStatus = "open"

    get items(): Readonly<CartItem[]> {
        return this._items
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    addItem(item: CartItem): void {
        this._items.push(item)
    }

    removeItem(index: number): void {
        this._items.splice(index, 1)
    }

    total(): number {
        return +this._items.reduce((acc, val) => acc + val.price, 0).toFixed(2)
    }

    checkout() {
        if (this.isEmpty()) {
            console.log('Seu carrinho está vazio.')
            return
        }

        this._orderStatus = "closed"
        this.sendMessage(`Seu pedido com total de ${this.total()} recebido.`)
        this.saveOrder()
        this.clear()
    }

    isEmpty() {
        return this._items.length === 0
    }

    sendMessage(msg: string): void {
        console.log('Mensagem enviada:', msg)
    }

    saveOrder(): void {
        console.log('Pedido salvo com sucesso.')
    }

    clear() {
        console.log('Carrinho de compras foi limpo.')
        this._items.length = 0;
    }
}

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



