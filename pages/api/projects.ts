import { NextApiRequest, NextApiResponse } from 'next'
import { createProject, deleteProject, getProject, getProjects, updateProject} from '../../lib/db/projects'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        if (req.query.id) {
            const project = await getProject(Number(req.query.id))
            res.status(200).json(project)
            return
        }

        const projects = await getProjects()
        res.status(200).json(projects)
    }
    
    if (req.method === 'POST') {
        const project = await createProject(req.body)
        res.status(201).json(project)
    }

    if (req.method === 'DELETE') {
        const project = await deleteProject(req.body.id)
        res.status(200).json(project)
    }

    if (req.method === 'PUT') {
        const project = await updateProject(req.body.id, req.body)
        res.status(200).json(project)
    }
}