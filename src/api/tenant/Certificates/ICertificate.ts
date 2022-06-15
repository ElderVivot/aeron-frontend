enum ETypeCertificate {
    eCNPJ = 'CNPJ',
    eCPF = 'CPF'
}

enum ECertificateStatus {
    ACTIVE = 'ACTIVE',
    OVERDUE = 'OVERDUE'
}

enum ECompanieStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE',
    DONT_FIND = 'DONT_FIND'
}

export interface ICertificate {
    idCertificate: string
    createdAt:Date
    updatedAt:Date
    password: string
    commomName: string
    startDateValidity:Date
    endDateValidity:Date
    nameCert: string
    federalRegistration: string
    eCpfCnpj: ETypeCertificate
    urlSaved: string
    statusCert: ECertificateStatus
    statusCompanie: ECompanieStatus
}