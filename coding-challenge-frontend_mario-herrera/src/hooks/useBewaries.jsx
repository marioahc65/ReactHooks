import { getBewaries } from '../services/bewaries.service'

export const berrawies = (pageNumber, pageSize, orderByDesc, byState) => (
    getBewaries(pageNumber, pageSize, orderByDesc, byState)
)