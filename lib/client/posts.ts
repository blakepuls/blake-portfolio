import { Prisma } from '@prisma/client';

export async function getPosts(token: string) {
    const response = await fetch('/api/posts');
    const posts = await response.json();
    return posts;
}

export async function updatePost(token: string, post: Prisma.PostUpdateInput) {
    const response = await fetch('/api/posts', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const updatedPost = await response.json();
    return updatedPost;
}

export async function createPost(token: string, post: Prisma.PostCreateInput) {
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const createdPost = await response.json();
    return createdPost;
}

export async function deletePost(token: string, id: number) {
    const response = await fetch(`/api/posts`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });

    const deletedPost = await response.json();
    return deletedPost;
}