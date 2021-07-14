import { Messaging } from './messaging'

function createSut() {
    return new Messaging()
}

describe('Messaging', () => {
    afterEach(() => jest.clearAllMocks())

    it('Should return undefined', () => {
        const sut = createSut()
        expect(sut.sendMessage('')).toBeUndefined()
    })

    it('Should call console.log onde', () => {
        const sut = createSut()
        const consoleSpy = jest.spyOn(console, 'log')
        sut.sendMessage('')
        expect(consoleSpy).toBeCalledTimes(1)
    })

    it('Should call console.log with "Mensagem enviada:", msg', () => {
        const sut = createSut()
        const consoleSpy = jest.spyOn(console, 'log')
        sut.sendMessage('teste')
        expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste')
    })

})