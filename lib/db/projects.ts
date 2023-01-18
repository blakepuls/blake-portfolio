import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getProjects() {
    const projects = await prisma.project.findMany()
    return projects
}

export async function getProject(id: number) {
    const project = await prisma.project.findUnique({
        where: {
            id: id
        }
    })

    return project
}

export async function updateProject(id: number, projectData: Prisma.ProjectUpdateInput) {
    const project = await prisma.project.update({
        where: {
            id: id
        },
        data: projectData
    })

    return project
}

export async function createProject(projectData: Prisma.ProjectCreateInput) {
    const project = prisma.project.create({
        data: projectData
    })
    
    return project
}

export async function deleteProject(id: number) {
    const project = prisma.project.delete({ 
        where: {
            id: id
        }
    })

    return project
}