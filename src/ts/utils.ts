import type { Listing } from './TypeDefinitions'

export const sortPlayers = (player1: Listing, player2: Listing): number => {
    return getTakeHomeAmt(player2) - getTakeHomeAmt(player1)
}

export const getTakeHomeAmt = (player: Listing): number => {
    const tenPercent = player.best_sell_price * 0.1
    const sellPrice = player.best_sell_price - tenPercent
    const takeHomeAmt = sellPrice - player.best_buy_price
    return takeHomeAmt
}

export const formatStubs = (stubbs: number) =>
    stubbs.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
