import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { ShoppingCart } from "./shopping-cart";
import { OrderStatus } from "./interfaces/OrderStatus";
import { CustomerOrder } from "./interfaces/ICustomer";


export class Order {
    private _orderStatus: OrderStatus = "open"
    constructor(
        private readonly cart: ShoppingCart,
        private readonly message: Messaging,
        private readonly persistency: Persistency,
        private readonly customer: CustomerOrder
    ) { }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            console.log('Seu carrinho está vazio.')
        }

        // console.log('ORDER:', this.cart.items)
        this._orderStatus = "closed"
        this.message.sendMessage(`Olá ${this.customer.getName()}, seu pedido com total de ${this.cart.totalWithDiscount()} já foi recebido.
            Será gerado nota fiscal no registro ${this.customer.getIDN()}`)
        this.persistency.saveOrder()
        this.cart.clear()
    }

}