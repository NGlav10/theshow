import listing from '../mocks/listing.json'
import type { Listing } from './TypeDefinitions'
import * as utils from './utils'

describe('utils', () => {
    const getListing = (
        sellPrice: number = 1,
        buyPrice: number = 1
    ): Listing => ({
        ...listing,
        best_sell_price: sellPrice,
        best_buy_price: buyPrice,
    })

    describe('sortPlayers', () => {
        it('should return the first player minus the second player', () => {
            const player1 = getListing(10, 8)
            const player2 = getListing(10, 9)
            expect(utils.sortPlayers(player1, player2)).toBe(-1)
        })

        it('should return a negative number', () => {
            const player1 = getListing(10, 9)
            const player2 = getListing(10, 8)
            expect(utils.sortPlayers(player1, player2)).toBe(1)
        })
    })

    describe('getTakeHomeAmt', () => {
        it('should return take home amount as 0', () => {
            const player = getListing(10, 9)
            expect(utils.getTakeHomeAmt(player)).toBe(0)
        })

        it('should return take home amount as 10', () => {
            const player = getListing(100, 100)
            expect(utils.getTakeHomeAmt(player)).toBe(-10)
        })

        it('should return the take home amount as 110403', () => {
            const player = getListing(122670, 100010)
            expect(utils.getTakeHomeAmt(player)).toBe(10393)
        })
    })

    describe('formatStubs', () => {
        it('should format a number with commas', () => {
            expect(utils.formatStubs(1234)).toBe('1,234')
        })
    })
})
