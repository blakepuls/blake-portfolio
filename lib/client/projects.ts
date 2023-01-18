import { Prisma } from '@prisma/client';

export async function getProjects(token: string) {
    const response = await fetch('/api/projects');
    const projects = await response.json();
    return projects;
}

export async function updateProject(token: string, project: Prisma.ProjectUpdateInput) {
    const response = await fetch('/api/projects', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    });

    const updatedProject = await response.json();
    return updatedProject;
}

export async function createProject(token: string, project: Prisma.ProjectCreateInput) {
    const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    });

    const createdProject = await response.json();
    return createdProject;
}

export async function deleteProject(token: string, id: number) {
    const response = await fetch(`/api/projects`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
    });

    const deletedProject = await response.json();
    return deletedProject;
}