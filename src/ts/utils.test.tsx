import type { Listing } from './TypeDefinitions'
import * as utils from './utils'

describe('utils', () => {
    const getPlayer = (sellPrice: number, buyPrice: number): Listing => ({
        best_sell_price: sellPrice,
        best_buy_price: buyPrice,
        listing_name: '',
        item: {
            uuid: '',
            type: '',
            img: '',
            name: '',
            rarity: '',
            team: '',
            team_short_name: '',
            ovr: 99,
            series: '',
            series_texture_name: '',
            series_year: 2001,
            display_position: '',
        },
    })

    describe('sortPlayers', () => {
        it('should return the first player minus the second player', () => {
            const player1 = getPlayer(10, 8)
            const player2 = getPlayer(10, 9)
            expect(utils.sortPlayers(player1, player2)).toBe(-1)
        })

        it('should return a negative number', () => {
            const player1 = getPlayer(10, 9)
            const player2 = getPlayer(10, 8)
            expect(utils.sortPlayers(player1, player2)).toBe(1)
        })
    })

    describe('getTakeHomeAmt', () => {
        it('should return take home amount as 0', () => {
            const player = getPlayer(10, 9)
            expect(utils.getTakeHomeAmt(player)).toBe(0)
        })

        it('should return take home amount as 10', () => {
            const player = getPlayer(100, 100)
            expect(utils.getTakeHomeAmt(player)).toBe(-10)
        })

        it('should return the take home amount as 110403', () => {
            const player = getPlayer(122670, 100010)
            expect(utils.getTakeHomeAmt(player)).toBe(10393)
        })
    })
})
