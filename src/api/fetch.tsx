import playerData from '../mock/playerData.json'

import { API_URL_PREFIX } from './ApiConstants'

export async function fetchPlayerData(isMock: boolean) {
    if (!!isMock) {
        return playerData
    } else {
        try {
            const response = await fetch(
                `${API_URL_PREFIX}listings.json?type=stadium&page=1`
            )
            return response.json()
        } catch (error) {
            console.error(error)
        }
    }
}
