import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '../../../lib/db/user'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST') 
        return res.status(405).json({message: 'Method not allowed'})

    const decoded = await verifyToken(req.body.token || req.cookies.token)

    if (!decoded) {
        // res.setHeader('Set-Cookie', 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT')
        return res.status(401).json({message: 'Invalid token'})
    }

    res.status(200).json({decoded})
}