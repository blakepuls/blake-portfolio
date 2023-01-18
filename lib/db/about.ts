import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getAbout() {
    const about = await prisma.about.findFirst()
    return about
}

export async function updateAbout(aboutData: Prisma.AboutUpdateInput) {
    const about = await prisma.about.update({
        where: {
            id: 1
        },
        data: aboutData
    })

    return about
}

export async function createAbout(aboutData: Prisma.AboutCreateInput) {
    const about = await prisma.about.create({
        data: aboutData
    })

    return about
}