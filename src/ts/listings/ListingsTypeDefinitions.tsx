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
    item: Player
}

export type Player = {
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
