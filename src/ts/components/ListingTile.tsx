import React from 'react'
import { useHistory } from 'react-router'
import { chevron, stubIcon } from '../../images'
import '../styleGuide.css'
import type { Listing, StyleSheet } from '../TypeDefinitions'
import { formatStubs, getTakeHomeAmt } from '../utils'

type Props = {
    listing: Listing
}

const ListingTile = (props: Props) => {
    const { listing } = props
    const history = useHistory()

    return (
        <div
            style={styles.tile}
            onClick={() => history.push(`/listing/${listing.item.uuid}`)}
        >
            <img src={listing.item.img} alt="Card" style={styles.image} />
            <div>
                <h2>
                    {listing.item.ovr} {listing.item.name}
                </h2>
                <div style={styles.divRow}>
                    <p>{`Sell for: ${formatStubs(listing.best_sell_price)}`}</p>
                    <img src={stubIcon} alt="stub" style={styles.stubImg} />
                </div>
                <div style={styles.divRow}>
                    <p>{`Buy for: ${formatStubs(listing.best_buy_price)}`}</p>
                    <img src={stubIcon} alt="stub" style={styles.stubImg} />
                </div>
                <div style={styles.divRow}>
                    <p>
                        {`Take Home: ${formatStubs(getTakeHomeAmt(listing))}`}
                    </p>
                    <img src={stubIcon} alt="stub" style={styles.stubImg} />
                </div>
            </div>
            <div style={{ flex: 1 }} />
            <img
                src={chevron}
                alt="Chevron"
                style={{ width: 'auto', maxHeight: 25 }}
            />
        </div>
    )
}

const styles: StyleSheet = {
    stubImg: {
        height: 20,
        paddingLeft: 5,
    },
    tile: {
        flexDirection: 'row',
        display: 'flex',
        padding: 15,
        margin: 10,
        borderRadius: 15,
        border: '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: '1px 3px 1px rgba(0, 0, 0, 0.08)',
        alignItems: 'center',
    },
    image: {
        marginRight: 10,
        maxWidth: 125,
        height: 'auto',
    },
    divRow: {
        display: 'flex',
        flexDirection: 'row',
        // height: 50,
        alignItems: 'center',
    },
}

export default ListingTile
