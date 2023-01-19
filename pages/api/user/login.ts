import { NextApiRequest, NextApiResponse } from 'next'
import { loginUser, getUser } from '../../../lib/db/user'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method != 'POST') 
        return res.status(405).json({message: 'Method not allowed'})

    const token = await loginUser(req.body.username, req.body.password)

    const user = await getUser()
    console.log(user)

    if(!user)
        return res.status(404).json({message: 'User not found'})

    if (!token)
        return res.status(401).json({message: 'Invalid credentials'})

    res.status(200).json({token})
}