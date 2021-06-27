type CartItem = {
    name: string;
    price: number;
}


export class ShoppingCart {
    private readonly _items: CartItem[] = []

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
        return this._items.reduce((acc, val) => acc + val.price, 0)
    }
}

const shoppingCart = new ShoppingCart()
shoppingCart.addItem({ name: "Camisa", price: 45.00 })
shoppingCart.addItem({ name: "Calça", price: 55.00 })
shoppingCart.addItem({ name: "Short", price: 35.00 })

shoppingCart.removeItem(1)

console.log(shoppingCart.items)
console.log(shoppingCart.total())