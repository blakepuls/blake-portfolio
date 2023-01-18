import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getSkills() {
  const skills = await prisma.skill.findMany({
    include: {
      items: true,
    },
  })
  
  return skills
}

export async function updateSkill(id: number, aboutData: Prisma.SkillUpdateInput) {
    return prisma.skill.update({
      where: { id },
      data: aboutData,
    })
}

export async function createSkill(aboutData: Prisma.SkillCreateInput) {
    return prisma.skill.create({
      data: aboutData,
    })
}

export async function deleteSkill(id: number) {
    return prisma.skill.delete({ where: { id } })
}

export async function deleteSkillItem(id: number) {
    return prisma.skillItem.delete({ where: { id } })
}

export async function createSkillItem(skillId: number, skillItemData: Prisma.SkillItemCreateInput) {
    return prisma.skillItem.create({
      data: {
        ...skillItemData,
        skill: {
          connect: { id: skillId },
        },
      },
    })
}
































/// Figure out how to get all the skill items when 