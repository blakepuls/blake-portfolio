import style from './style.module.scss';
import Skill from '../../components/Skill';
import Profile from '../../components/Profile';
import Project from '../../components/Project';
import Skills from '../../components/Skills';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function page() {
    const projects = await prisma.project.findMany();
    const about = await prisma.about.findFirst();
    const skills = await prisma.skill.findMany({
        include: {
            items: true
        }
    });

    //order skills by amount of items
    skills.sort((a, b) => {
        return b.items.length - a.items.length;
    })

    return (
        <div className='page'>
                <div className={style.about}>
                    <br/>
                        <Profile about={about}/>
                    <p>
                        {about?.content}
                    </p>
                </div>
                <div className={style.skills}>
                    <Skills skills={skills}/>
                </div>
            <div className={style.intro}>
            </div>

            <h1>Projects</h1>
            <div className={style.projects}>
                {projects.map(project => {
                    return (
                        <Project project={project}/>
                    )
                })}
            </div>
        </div>
    )
}