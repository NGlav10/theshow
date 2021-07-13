import React, { useEffect, useState } from 'react'
import { useParams, withRouter } from 'react-router-dom'
import { fetchListing } from './api/fetch'
import { ListingTile } from './components'
import type {
    CompletedOrder,
    Listing,
    ListingParams,
    PriceHistory,
} from './TypeDefinitions'

const ListingScreen = () => {
    const { uuid } = useParams<ListingParams>()
    const [listing, setListing] = useState<Listing>()

    useEffect(() => {
        fetchListing(uuid).then((data: Listing) => setListing(data))
    }, [uuid])

    if (!listing) {
        return <h1>No Listing</h1>
    } else {
        const { price_history, completed_orders } = listing

        const _renderCompletedOrders = () =>
            !!completed_orders && (
                <div>
                    <h2>Completed Orders</h2>
                    <h4>Avg: {getCompletedOrderAvg(completed_orders)}</h4>
                    <h4>High</h4>
                    <h4>Low</h4>
                    {!!completed_orders &&
                        completed_orders.map((order: CompletedOrder) => {
                            return <p>{order.price}</p>
                        })}
                </div>
            )

        const _renderPriceHistory = () =>
            !!price_history && (
                <div>
                    <h2>Price History</h2>
                    <h4>Avg: {getPriceHistoryAvg(price_history).buyAvg}</h4>
                    <h4>High</h4>
                    <h4>Low</h4>
                    {!!price_history &&
                        price_history.map((price: PriceHistory) => {
                            return <p>{price.best_buy_price}</p>
                        })}
                </div>
            )

        return (
            <>
                <ListingTile listing={listing} />
            </>
        )
    }
}

export default withRouter(ListingScreen)
