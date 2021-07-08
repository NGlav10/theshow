import playerData from '../mock/playerData.json'

import { API_URL_PREFIX } from './ApiConstants'

export async function fetchPlayerData(isMock: boolean) {
    if (!!isMock) {
        return playerData
    } else {
        try {
            const response = await fetch(
                'https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis/listings.json'
            )
            return response.json()
        } catch (error) {
            console.error(error)
        }
    }
}
