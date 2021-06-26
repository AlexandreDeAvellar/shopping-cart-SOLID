

export class ShoppingCart {
    private readonly _items: { name: string, price: number }[] = []

    talk(name: string) {
        console.log(`Hello ${name}`)
    }
}

const a = new ShoppingCart()

a.talk('Ale')