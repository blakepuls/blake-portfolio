import { NextApiRequest, NextApiResponse } from 'next'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../../lib/db/posts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        if (req.query.id) {
            const post = await getPost(Number(req.query.id))
            res.status(200).json(post)
            return
        }

        const posts = await getPosts()
        res.status(200).json(posts)
    }
    
    if (req.method === 'POST') {
        const post = await createPost(req.body)
        res.status(201).json(post)
    }

    if (req.method === 'DELETE') {
        const post = await deletePost(req.body.id)
        res.status(200).json(post)
    }

    if (req.method === 'PUT') {
        const post = await updatePost(req.body.id, req.body)
        res.status(200).json(post)
    }
}
