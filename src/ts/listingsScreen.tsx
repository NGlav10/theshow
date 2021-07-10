import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import { fetchListings } from './api/fetch'
import { ListingTile } from './components'
import type { Listing, Page } from './TypeDefinitions'
import { sortPlayers } from './utils'

function ListingsScreen() {
    const [listings, setListings] = useState<Listing[]>([])

    useEffect(() => {
        fetchListings().then((data: Page) => setListings(data?.listings))
    }, [])

    return (
        <div>
            <h1>The Show 21: Community Market</h1>
            {listings.sort(sortPlayers).map((listing: Listing) => (
                <ListingTile listing={listing} />
            ))}
        </div>
    )
}

export default withRouter(ListingsScreen)
