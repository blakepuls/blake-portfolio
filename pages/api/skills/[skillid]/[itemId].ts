import { Prisma } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next'
import { createSkillItem, deleteSkillItem } from '../../../../lib/db/skills'
import { NextRouter } from 'next/router'

export default async (req: NextApiRequest, res: NextApiResponse, router: NextRouter) => {
    const { itemId } = req.query

    if (req.method === 'DELETE') {
        const about = await deleteSkillItem(Number(itemId))
        res.status(200).json(about)
    }
}