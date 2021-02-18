import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function avgPrice(request: NextApiRequest, response: NextApiResponse) {
    const { stock } = request.query

    try {
        const avgPrice = await axios.get(`https://www.binance.com/api/v3/avgPrice?symbol=${stock}`)

        response.json(avgPrice.data)
    } catch (e) {
        response.status(500).json({ error: 'Stock not found' })
    }
}
