type CartItem = {
    name: string;
    price: number;
}


export class ShoppingCart {
    private readonly _items: CartItem[] = []
    private orderStatus: 'open' | 'closed' = "open"

    get items(): Readonly<CartItem[]> {
        return this._items
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

    checkou() {
        if (this.isEmpty()) {
            console.log('Seu carrinho está vazio.')
            return
        }

        this.orderStatus = "closed"
        this.sendMessage('Seu pedido foi recebido.')
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
        this._items.length = 0;
    }
}

const shoppingCart = new ShoppingCart()
shoppingCart.addItem({ name: "Camisa", price: 45.362 })
shoppingCart.addItem({ name: "Calça", price: 55.99 })
shoppingCart.addItem({ name: "Short", price: 35.853 })

// shoppingCart.removeItem(1)

console.log(shoppingCart.items)
console.log(shoppingCart.total())