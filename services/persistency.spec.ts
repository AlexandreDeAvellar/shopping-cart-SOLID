import { Persistency } from "./persistency"

function createPersistency() {
    const persistency = new Persistency()
    return persistency
}

describe('Persistency', () => {
    afterEach(() => jest.clearAllMocks())

    it('Should return undefined', () => {
        const sut = createPersistency()
        expect(sut.saveOrder()).toBeUndefined()
    })

    it('Should call console.log once', () => {
        const sut = createPersistency()
        const consoleSpy = jest.spyOn(console, 'log')
        sut.saveOrder()
        expect(consoleSpy).toBeCalledTimes(1)
    })

    it('Should call console.log with "Pedido salvo com sucesso."', () => {
        const sut = createPersistency()
        const consoleSpy = jest.spyOn(console, 'log')
        sut.saveOrder()
        expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso.')
    })
})