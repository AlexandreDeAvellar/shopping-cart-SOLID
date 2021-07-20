import { Discount, NoDiscount, TenPercentDiscount, FiftyPercentDiscount } from './discount'

const createSut = (className: new () => Discount): Discount => {
    return new className()
}

describe('Discount', () => {
    // jest.setTimeout(3000)
    // afterEach(e => jest.clearAllMocks())

    it('Should no discount', () => {
        const sut = createSut(NoDiscount)
        expect(sut.calculate(10.59)).toBeCloseTo(10.59)
    })

    it('Should aplly 10% discount', () => {
        const sut = createSut(TenPercentDiscount)
        expect(sut.calculate(10)).toBeCloseTo(9)
    })

    it('Should aplly 50% discount', () => {
        const sut = createSut(FiftyPercentDiscount)
        expect(sut.calculate(10)).toBeCloseTo(5)
    })
})