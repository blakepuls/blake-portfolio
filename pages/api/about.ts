import { NextApiRequest, NextApiResponse } from 'next'
import { createAbout, getAbout, updateAbout } from '../../lib/db/about'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const about = await getAbout()
        res.status(200).json(about)
    }
    
    if (req.method === 'POST') {
        const about = await createAbout(req.body)
        res.status(201).json(about)
    }

    if (req.method === 'DELETE') {
    
    }

    if (req.method === 'PUT') {
        const about = await updateAbout(req.body)
        res.status(200).json(about)
    }
}
