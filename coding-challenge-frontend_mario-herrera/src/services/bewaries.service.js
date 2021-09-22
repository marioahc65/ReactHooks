import axios from 'axios'

import settings from '../config/settings.json'


export  const getBewaries = async (pageNumber = 1, pageSize = 12, orderByDesc = 'asc', byState = '') => {
    const params = new URLSearchParams()
    params.append('page', pageNumber.toString())
    params.append('per_page', pageSize.toString())
    params.append('by_state', byState.toString())
    params.append('sort', orderByDesc.toString())
    const data = (
        await axios.get(settings.Bewaries.getAll, {
            params
        })
    ).data
    return data
}

export  const getBewariesByCity = async (pageNumber = 1, pageSize = 12, orderByDesc = 'asc',filterText = '') => {
    const params = new URLSearchParams()
    params.append('page', pageNumber.toString())
    params.append('per_page', pageSize.toString())
    params.append('sort', orderByDesc.toString())
    params.append('by_city', filterText.toString())
    const data = (
        await axios.get(settings.Bewaries.getAll, {
            params
        })
    ).data
    return data
}

