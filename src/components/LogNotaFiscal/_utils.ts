import { formatDate } from '@common/utils/functions'//

export function getCompetenceMain (): string {
    const today = new Date()

    const competence = today.getDate() >= 8
        ? formatDate(today, '', 'yyyyMM')
        : formatDate(new Date(today.getFullYear(), today.getMonth() - 1, 1), '', 'yyyyMM')

    return competence
}

export function getCompetenceMainSubTwo (): string {
    const today = new Date()

    const competence = today.getDate() >= 8
        ? formatDate(new Date(today.getFullYear(), today.getMonth() - 1, 1), '', 'yyyyMM')
        : formatDate(new Date(today.getFullYear(), today.getMonth() - 2, 1), '', 'yyyyMM')

    return competence
}

export const competencesToDown = [getCompetenceMain(), getCompetenceMainSubTwo()]