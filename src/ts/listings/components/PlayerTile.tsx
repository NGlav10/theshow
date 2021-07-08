import React from 'react'
import type { Listing } from '../ListingsTypeDefinitions'
import { getTakeHomeAmt } from '../listingsUtils'

type Props = {
    listing: Listing
}

class PlayerTile extends React.Component<Props> {
    render() {
        const { listing } = this.props

        return (
            <div style={styles.tile}>
                <img src={listing.item.img} />
                <h1>
                    {listing.item.ovr} {listing.item.name}
                </h1>
                <h2>{getTakeHomeAmt(listing).toFixed()}</h2>
            </div>
        )
    }
}

const styles: StyleSheet = {
    tile: {
        flexDirection: 'row',
    },
}

interface StyleSheet {
    [key: string]: React.CSSProperties
}

export default PlayerTile
