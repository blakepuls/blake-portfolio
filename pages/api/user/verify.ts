import { NextApiRequest, NextApiResponse } from 'next'
import { verifyToken } from '../../../lib/db/user'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST') 
        return res.status(405).json({message: 'Method not allowed'})

    const decoded = await verifyToken(req.cookies['token'] as string)
    
    if (!decoded)
        return res.status(401).json({message: 'Invalid token'})

    res.status(200).json({decoded})
}