import { Discount } from "./discount"
import { CartItem } from "./interfaces/CartItem"
import { IShoppingCart } from "./interfaces/IShoppingCart"

export class ShoppingCart implements IShoppingCart {
    private readonly _items: CartItem[] = []

    constructor(private readonly discount: Discount) { }

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

    totalWithDiscount() {
        return +this.discount.calculate(this.total()).toFixed(2)
    }

    isEmpty() {
        return this._items.length === 0
    }

    clear() {
        console.log('Carrinho de compras foi limpo.')
        this._items.length = 0;
    }
}





