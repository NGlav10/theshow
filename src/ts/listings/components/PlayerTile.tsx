import React from 'react'

import type { Listing } from '../ListingsTypeDefinitions'
import { getTakeHomeAmt, formatStubbs } from '../listingsUtils'

import STUBBS_IMG from '../../../images/stub-icon.png'

type Props = {
    listing: Listing
}

class PlayerTile extends React.Component<Props> {
    render() {
        const { listing } = this.props

        return (
            <div
                style={styles.tile}
                onClick={() => window.open('../listingScreen')}
            >
                <img src={listing.item.img} alt="Card" style={styles.image} />
                <div>
                    <h2>
                        {listing.item.ovr} {listing.item.name}
                    </h2>
                    <div style={styles.divRow}>
                        <h4>{`Sell for: ${formatStubbs(
                            listing.best_sell_price
                        )}`}</h4>
                        <img
                            src={STUBBS_IMG}
                            alt="stub"
                            style={styles.stubImg}
                        />
                    </div>
                    <div style={styles.divRow}>
                        <h4>{`Buy for: ${formatStubbs(
                            listing.best_buy_price
                        )}`}</h4>
                        <img
                            src={STUBBS_IMG}
                            alt="stub"
                            style={styles.stubImg}
                        />
                    </div>
                    <div style={styles.divRow}>
                        <h3>{`Take Home: ${formatStubbs(
                            getTakeHomeAmt(listing)
                        )}`}</h3>
                        <img
                            src={STUBBS_IMG}
                            alt="stub"
                            style={styles.stubImg}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const styles: StyleSheet = {
    stubImg: {
        height: 20,
        paddingLeft: 5,
    },
    tile: {
        flexDirection: 'row',
        display: 'flex',
        paddingBottom: 10,
        border: 10,
    },
    image: {
        paddingRight: 10,
    },
    divRow: {
        display: 'flex',
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
}

interface StyleSheet {
    [key: string]: React.CSSProperties
}

export default PlayerTile
