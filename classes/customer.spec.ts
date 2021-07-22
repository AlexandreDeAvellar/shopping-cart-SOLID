import { EnterpriseCustomer, IndividualCustomer } from "./customer"

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
    return new EnterpriseCustomer(name, cnpj)
}

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
    return new IndividualCustomer(firstName, lastName, cpf)
}

afterEach(jest.clearAllMocks)

describe('Customer', () => {
    it('Should have properties firstName, lastName and cpf', () => {
        const sut = createIndividualCustomer('Ale', "All", "123.123.123-12")
        expect(sut).toHaveProperty('firstName', 'Ale')
        expect(sut).toHaveProperty('lastName', 'All')
        expect(sut).toHaveProperty('cpf', '123.123.123-12')
    })

    it('Should have methods getName and getIDN', () => {
        const sut = createIndividualCustomer('Ale', "All", "123.123.123-12")
        expect(sut.getName()).toBe('Ale')
        expect(sut.getIDN()).toBe('123.123.123-12')
    })
})

describe('Enterprise', () => {
    it('Should have properties name and cnpj', () => {
        const sut = createEnterpriseCustomer('Empresa', '123')
        expect(sut).toHaveProperty('name', 'Empresa')
        expect(sut).toHaveProperty('cnpj', '123')
    })

    it('Shold have methods getName and getIDN', () => {
        const sut = createEnterpriseCustomer('Empresa', '123')
        expect(sut.getName()).toBe('Empresa')
        expect(sut.getIDN()).toBe('123')
    })
})