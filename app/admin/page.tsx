'use client';

import { useEffect, useState } from 'react';
import style from './style.module.scss';
import LoginForm from '../../components/LoginForm';
import EditableProject from '../../components/EditableProject';
import { Plus } from 'react-feather';
import { getProjects } from '../../lib/client/projects';
import EditablePost from '../../components/EditablePost';
import AboutEditor from '../../components/AboutEditor';
import SkillsEditor from '../../components/SkillsEditor';

export default function page() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [projects, setProjects] = useState<any>([]);

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        const projects = await getProjects();
        setProjects(projects);
    }

    const newProject = () => {
        const newProjects: any = [...projects, {
            id: -1,
            title: '',
            description: '',
            tech: [],
            source: '',
            post: '',
            image: ''
        }]

        setProjects(newProjects);
    }

    if(!loggedIn) 
        return <LoginForm setLoggedIn={setLoggedIn} />;

    return (
        <div className='page'>
            <h1>About</h1>
            <div className={style.about}>
                <AboutEditor /> 
                <SkillsEditor />
            </div>

            <h1>Projects</h1>
            <div className={style.projects}>
                <div className={style['new-project']} onClick={newProject}>
                    <Plus className={style.icon}/>
                </div>
                {projects.map((project: any, i: number) => (
                    <EditableProject 
                        key={i}
                        editing={project.id == -1} 
                        onDelete={() => setProjects(projects.filter((_: any, j: number) => j != i))}
                        project={project}/>
                    )
                )}
            </div>

            <h1>Posts</h1>
            <EditablePost />
        </div>
    )
}