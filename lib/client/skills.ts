import { Prisma } from '@prisma/client';

export async function getSkills(token: string) {
    const response = await fetch('/api/skills');
    const skills = await response.json();
    return skills;
}

export async function updateSkills(token: string, skillData: Prisma.SkillUpdateInput) {
    const response = await fetch('/api/skills', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillData),
    });

    const updatedSkills = await response.json();
    return updatedSkills;
}

export async function createSkill(token: string, skillData: Prisma.SkillCreateInput) {
    const response = await fetch('/api/skills', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillData),
    });

    const createdSkill = await response.json();
    return createdSkill;
}

export async function deleteSkill(token: string, id: number) {
    const response = await fetch(`/api/skills/`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    });

    const deletedSkill = await response.json();
    return deletedSkill;
}

export async function deleteSkillItem(token: string, id: number) {
    const response = await fetch(`/api/skills/items/${id}`, {
        method: 'DELETE',
    });

    const deletedSkillItem = await response.json();
    return deletedSkillItem;
}

export async function createSkillItem(token: string, skillId: number, skillItemData: Prisma.SkillItemCreateInput) {
    const response = await fetch(`/api/skills/${skillId}/items`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillItemData),
    });

    const createdSkillItem = await response.json();
    return createdSkillItem;
}