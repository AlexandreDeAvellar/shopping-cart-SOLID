export abstract class Discount {
    protected discount = 0
    calculate(value: number): number {
        return value - (value * this.discount)
    };
}

export class TenPercentDiscount extends Discount {
    protected discount = 0.1
}

export class FiftyPercentDiscount extends Discount {
    protected discount = 0.5
}

export class NinetyNinePercentDiscount extends Discount {
    protected discount = 0.99
}

export class NoDiscount extends Discount { }