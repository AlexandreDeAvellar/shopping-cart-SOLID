import { IEnterpriseCustomer, IIndividualCustomer, CustomerOrder } from "./interfaces/ICustomer";


export class IndividualCustomer implements IIndividualCustomer, CustomerOrder {
    public firstName: string;
    public lastName: string;
    public cpf: string;

    constructor(firstName: string, lastName: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.cpf = cpf;
    }

    getName(): string {
        return this.firstName
    }

    getIDN(): string {
        return this.cpf
    }
}

export class EnterpriseCustomer implements IEnterpriseCustomer, CustomerOrder {
    public name: string;
    public cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    getName(): string {
        return this.name
    }

    getIDN(): string {
        return this.cnpj
    }
}