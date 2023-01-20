import { Prisma } from '@prisma/client';

export async function getAbout() {
    const response = await fetch('/api/about');
    const about = await response.json();
    return about;
}

export async function updateAbout(post: Prisma.AboutUpdateInput) {
    const response = await fetch('/api/about', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const updatedAbout = await response.json();
    return updatedAbout;
}

export async function createAbout(post: Prisma.AboutCreateInput) {
    const response = await fetch('/api/about', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    const createdAbout = await response.json();
    return createdAbout;
}