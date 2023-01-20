import style from './style.module.scss';
import Skill from '../../components/Skill';
import Profile from '../../components/Profile';
import Project from '../../components/Project';

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

    return (
        <div className='page'>
            <div className={style.intro}>
                <div className={style.about}>
                    <br/>
                        <Profile about={about}/>
                    <p>
                        Test {about?.content}
                    </p>
                </div>
                <div className={style.skills}>
                    {skills.map(skill => {
                        return (
                            <div className={style.skill}>
                                <h2>{skill.title}</h2>
                                <div className={style.stack}>
                                    {skill.items.map(item => {
                                        return (
                                            <Skill name={item.name} image={item.image}/>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </div>

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