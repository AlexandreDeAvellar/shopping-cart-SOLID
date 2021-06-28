import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";
import { OrderStatus } from "./interfaces/OrderStatus";


export class Order {
    private _orderStatus: OrderStatus = "open"
    constructor(
        private readonly cart: ShoppingCart,
        private readonly message: Messaging,
        private readonly persistency: Persistency
    ) { }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Seu carrinho está vazio.')
        }

        console.log('ORDER:', this.cart.items)
        this._orderStatus = "closed"
        this.message.sendMessage(`Seu pedido com total de ${this.cart.total()} recebido.`)
        this.persistency.saveOrder()
        this.cart.clear()
    }

}