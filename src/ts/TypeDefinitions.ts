export type Page = {
    page: number
    per_page: number
    total_pages: number
    listings: Listing[]
}

export type Listing = {
    listing_name: string
    best_sell_price: number
    best_buy_price: number
    item: Item
    price_history?: PriceHistory[]
    completed_orders?: CompletedOrder[]
}

export type Item = {
    uuid: string
    type: string
    img: string
    name: string
    rarity: string
    team: string
    team_short_name: string
    ovr: number
    series: string
    series_texture_name: string
    series_year: number
    display_position: string
}

export type PriceHistory = {
    date: string
    best_buy_price: number
    best_sell_price: number
}

export type CompletedOrder = {
    date: string
    price: string
}

export type ListingParams = {
    uuid: string
}

export type StyleSheet = {
    [key: string]: React.CSSProperties
}

export type ListingHistory = {
    avg: number
    high: number
    low: number
}
