import { Product } from './product'

function createSut(name: string, price: number): Product {
    return new Product(name, price)
}

describe('Product', () => {
    afterEach(() => jest.clearAllMocks())
    it('Should return product property values', () => {
        const sut = createSut('Camisa', 79.9)
        expect(sut).toHaveProperty('name', 'Camisa')
        expect(sut.price).toBeCloseTo(79.9)
    })
})