import {getBewariesByCity} from '../services/bewaries.service'

export const berrawiesByCity = (pageNumber, pageSize, orderByDesc,FilterText) => (
    getBewariesByCity(pageNumber, pageSize, orderByDesc,FilterText)
)