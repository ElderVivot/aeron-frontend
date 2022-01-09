type TModelNotaFiscal = '55' | '65' | '57'
type TSituationNotaFiscal = '1' | '2' | '3'
type TTypeLogNotaFiscal = 'success' | 'warning' | 'error' | 'processing' | 'to_process'

export interface ILogNotaFiscal {
    idLogNotaFiscal: string
    idCompanie: string
    createdAt:Date
    updatedAt:Date
    modelNotaFiscal: TModelNotaFiscal
    situationNotaFiscal: TSituationNotaFiscal
    dateStartDown:Date
    dateEndDown:Date
    typeLog: TTypeLogNotaFiscal
    messageLog: string
    messageLogToShowUser: string
    wayCertificate: string
    messageError: string
    qtdNotesDown: number
    qtdTimesReprocessed: number
    pageInicial: number
    pageFinal: number
    qtdPagesTotal: number
}