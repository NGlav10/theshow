import React, { useEffect, useState } from 'react'
import { fetchPlayerData } from '../../api/fetch'

import PlayerTile from './components/PlayerTile'
import type { Page, Listing } from './ListingsTypeDefinitions'
import { sortPlayers } from './listingsUtils'

export default function Board() {
    const [listings, setListings] = useState<Listing[]>([])

    useEffect(() => {
        fetchPlayerData(false).then((data: Page) => setListings(data?.listings))
    }, [])

    if (!listings) {
        return <p>Error fetching data</p>
    } else {
        const sortedPlayers = listings.sort(sortPlayers)
        console.log(sortedPlayers)
        return (
            <>
                {listings.sort(sortPlayers).map((listing: Listing) => (
                    <PlayerTile listing={listing} />
                ))}
            </>
        )
    }
}
