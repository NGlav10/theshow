import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchListing } from './api/fetch'
import { ListingTile } from './components'
import type { Listing } from './TypeDefinitions'

const ListingScreen = () => {
    const [listing, setListing] = useState<Listing>()

    useEffect(() => {
        fetchListing('1234').then((data: Listing) => setListing(data))
    }, [])

    if (!!listing) {
        return <ListingTile listing={listing} />
    } else {
        return <h1>No Listing</h1>
    }
}

export default withRouter(ListingScreen)
