import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'
import { createSkillItem, deleteSkillItem } from '../../../../lib/db/skills'
import { NextRouter } from 'next/router'

export default async (req: NextApiRequest, res: NextApiResponse, router: NextRouter) => {
    const { skillid } = req.query

    if (req.method === 'POST') {
        const about = await createSkillItem(Number(skillid), req.body)
        res.status(201).json(about)
    }

    if (req.method === 'DELETE') {
        const about = await deleteSkillItem(Number(skillid))
        res.status(200).json(about)
    }
}