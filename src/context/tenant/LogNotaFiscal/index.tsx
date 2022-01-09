import { createContext, useState, useContext, Dispatch, SetStateAction, PropsWithChildren } from 'react'

import { formatDate } from '@common/utils/functions'
import { IDataPageLogNotaFiscal } from '@components/LogNotaFiscal/_IDataPage'

interface IUseDataPageLogNotaFiscal {
    dataPage: IDataPageLogNotaFiscal
    setDataPage: Dispatch<SetStateAction<IDataPageLogNotaFiscal>>
}

const LogNotaFiscalContext = createContext(null)

export function LogNotaFiscalProvider ({ children }: PropsWithChildren<object>): JSX.Element {
    const today = new Date()
    const [dataPage, setDataPage] = useState<IDataPageLogNotaFiscal>(
        {
            competence: today.getDate() >= 16 ? formatDate(today, '', 'yyyyMM') : formatDate(new Date(today.getFullYear(), today.getMonth() - 1, 1), '', 'yyyyMM')
        }
    )

    return (
        <LogNotaFiscalContext.Provider
            value={{
                dataPage,
                setDataPage
            }}
        >
            {children}
        </LogNotaFiscalContext.Provider>
    )
}

export function useDataPageLogNotaFiscal (): IUseDataPageLogNotaFiscal {
    const context = useContext(LogNotaFiscalContext)
    if (!context) throw new Error('useDataPageLogNotaFiscal must be used within a LogNotaFiscalContext')
    const { dataPage, setDataPage } = context
    return { dataPage, setDataPage }
}