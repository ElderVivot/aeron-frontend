type TTypeLog = 'success' | 'warning' | 'error' | 'processing' | 'to_process'

export interface ILogNfsPrefGyn {
    idLogNfsPrefGyn: string
    idAccessPortals: string
    idCompanie: string
    createdAt:Date
    updatedAt:Date
    cityRegistration: string
    nameCompanie: string
    dateStartDown:Date
    dateEndDown:Date
    typeLog: TTypeLog
    messageLog: string
    messageLogToShowUser: string
    messageError: string
    urlPrintLog: string
    qtdNotesDown: number
    qtdTimesReprocessed: number
}