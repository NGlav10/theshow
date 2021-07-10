import { listing, listings } from '../../mocks'

import { IS_MOCK } from '../constants'

export async function fetchListings() {
    if (IS_MOCK) {
        return listings
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

export async function fetchListing(uuid: string) {
    if (IS_MOCK) {
        return listing
    } else {
        try {
            const response = await fetch(
                `https://cors-anywhere.herokuapp.com/https://mlb21.theshow.com/apis/listing.json?uuid=${uuid}`
            )
            return response.json()
        } catch (error) {
            console.error(error)
        }
    }
}
