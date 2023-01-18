import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getPosts() {
    const posts = await prisma.post.findMany()
    return posts
}

export async function getPost(id: number) {
    const post = await prisma.post.findUnique({
        where: {
            id: id
        }
    })

    return post
}

export async function updatePost(id: number, postData: Prisma.PostUpdateInput) {
    const post = await prisma.post.update({
        where: {
            id: id
        },
        data: postData
    })

    return post
}

export async function createPost(postData: Prisma.PostCreateInput) {
    const post = prisma.post.create({
        data: postData
    })
    
    return post
}

export async function deletePost(id: number) {
    const post = prisma.post.delete({ 
        where: {
            id: id
        }
    })

    return post
}