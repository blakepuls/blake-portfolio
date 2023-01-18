'use client'

import style from './style.module.scss';
// import { Prisma } from '@prisma/client';
import { Code } from 'react-feather'

interface Project {
    id: number | undefined;
    title: string;
    description: string;
    tech: string[];
    source?: string;
    post: string;
    image: string;
}

export default function Project(props: { project: Project }) {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <img className={style.preview} src={props.project.image}/>
            </div>
            <div className={style.bottom}>
                <div className={style.row}>
                    <span className={style.title}>{props.project.title}</span>
                    <button className={style.blog} onClick={() => window.open(props.project.post, '_blank')}>View Post</button>
                </div>
                
                <p className={style.description}>{props.project.description}</p>
            
                <div>
                    <span className={style.title}>Project</span>
                    <Code type='button' className={style.source} size={30} onClick={() => window.open(props.project.source, '_blank')}/>
                </div>

                <div className={style.techs}>
                    {props.project.tech.map((tech, i) => (<span key={i} className={style.tech}>{tech}</span>) )}
                </div>
            </div>
        </div>
    )
}