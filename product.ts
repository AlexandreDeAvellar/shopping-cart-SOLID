import { CartItem } from "./types/CartItem";

export class Product implements CartItem {
    constructor(public name: string, public price: number) { }
}