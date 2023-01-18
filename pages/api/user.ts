import { NextApiRequest, NextApiResponse } from 'next'
import { createUser, getUser } from '../../lib/db/user'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const user = await getUser()

        if(!user) {
            res.status(404).json({message: 'User not found'})
            return
        }

        res.status(200).json({message: 'User found'})
    }

    if (req.method === 'POST') {
        if(await getUser()) {
            res.status(400).json({message: 'User already exists'})
            return
        }

        const user = await createUser(req.body.username, req.body.password)

        res.status(201).json(user)
    }
}