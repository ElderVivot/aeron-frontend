enum ETypeFederalRegistration {
    cnpj = 'cnpj',
    cpf = 'cpf',
    cei = 'cei',
    caepf = 'caepf',
    foreign = 'foreign'
}

enum ECompanieStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

export interface ICompanie {
    idCompanie: string
    createdAt: Date
    updatedAt: Date
    codeCompanieAccountSystem: string
    name: string
    nickName: string
    typeFederalRegistration: ETypeFederalRegistration
    federalRegistration: string
    stateRegistration: string
    cityRegistration: string
    status: ECompanieStatus
    dddPhone: number
    phone: string
    email: string
    neighborhood: string
    street: string
    zipCode: string
    complement: string
    referency: string
    dateInicialAsCompanie: Date
    dateInicialAsClient: Date
    dateFinalAsClient: Date
    cnaes: string
    taxRegime: '01' | '02' | '03' | '99'
    idCity: number,
    nameCity: string
    stateCity: string
}