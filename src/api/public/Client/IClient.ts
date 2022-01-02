enum ETypeFederalRegistration {
    cnpj = 'cnpj',
    cpf = 'cpf',
    cei = 'cei',
    caepf = 'caepf',
    foreign = 'foreign'
}

enum EClientStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export interface IClient {
    idClient: string
    name: string
    createdAt: Date
    updatedAt: Date
    typeFederalRegistration: ETypeFederalRegistration
    federalRegistration: string
    nickName: string
    status: EClientStatus
    neighborhood: string
    street: string
    zipCode: string
    complement: string
    referency: string
    dateAsClient: Date
    idCity: number
}