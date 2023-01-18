import { NextApiRequest, NextApiResponse } from 'next'
import { createSkill, deleteSkill, getSkills, updateSkill } from '../../lib/db/skills'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const projects = await getSkills()
        res.status(200).json(projects)
    }
    
    if (req.method === 'POST') {
        const project = await createSkill(req.body)
        res.status(201).json(project)
    }

    if (req.method === 'DELETE') {
        const project = await deleteSkill(req.body.id)
        res.status(200).json(project)
    }

    if (req.method === 'PUT') {
        const project = await updateSkill(req.body.id, req.body)
        res.status(200).json(project)
    }
}