import { makeDateImplementation } from '@common/adapters/date/date-factory'

/**
 * @param dateString date in string
 * @param inputFormat input date format
 * @param outputFormat output date format
 * @returns new string date in format 'yyyy-mm-dd'
 * @example formatDate('01/01/2021', 'dd/mm/yyyy', 'yyyy-mm-dd') -> '2021-01-01'
 */
export function formatDate (dateString: string, inputFormat = 'dd/MM/yyyy', outputFormat = 'yyyy-MM-dd'): string | null {
    try {
        if (!dateString) return null
        const dateFactory = makeDateImplementation()
        const date = dateFactory.parseDate(dateString, inputFormat)
        return dateFactory.formatDate(date, outputFormat)
    } catch (error) {
        console.log(error)
        return null
    }
}

/**
 * @param competence string in format NOME_MES/ANO
 * @returns new string in format 'yyyymm'
 * @example formatCompetenceWithNameOfMonths('JANEIRO/2021') -> '202101'
 */
export function formatCompetenceWithNameOfMonths (competence: string): string {
    competence = competence.toUpperCase()
    const competenceSplit = competence.split('/')
    let newCompetence: string
    if (competenceSplit[0] === 'JANEIRO') newCompetence = '01'
    else if (competenceSplit[0] === 'FEVEIRO') newCompetence = '02'
    else if (competenceSplit[0] === 'MARCO') newCompetence = '03'
    else if (competenceSplit[0] === 'ABRIL') newCompetence = '04'
    else if (competenceSplit[0] === 'MAIO') newCompetence = '05'
    else if (competenceSplit[0] === 'JUNHO') newCompetence = '06'
    else if (competenceSplit[0] === 'JULHO') newCompetence = '07'
    else if (competenceSplit[0] === 'AGOSTO') newCompetence = '08'
    else if (competenceSplit[0] === 'SETEMBRO') newCompetence = '09'
    else if (competenceSplit[0] === 'OUTUBRO') newCompetence = '10'
    else if (competenceSplit[0] === 'NOVEMBRO') newCompetence = '11'
    else if (competenceSplit[0] === 'DEZEMBRO') newCompetence = '12'

    newCompetence = competenceSplit[1] + '' + newCompetence
    return newCompetence
}

/**
 * @param competence string in format 'mm/yyyy'
 * @returns new string in format 'yyyymm'
 * @example formatCompetence('01/2021') -> '202101'
 */
export function formatCompetence (competence: string): string {
    const competenceSplit = competence.split('/')
    const newCompetence = competenceSplit[1] + '' + competenceSplit[0]
    return newCompetence
}