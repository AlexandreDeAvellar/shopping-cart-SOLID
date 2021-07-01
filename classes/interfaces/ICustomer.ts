
export interface IIndividualCustomer {
    firstName: string;
    lastName: string;
    cpf: string;
}

export interface IEnterpriseCustomer {
    name: string
    cnpj: string
}

export interface CustomerOrder {
    getName(): string;
    getIDN(): string;
}