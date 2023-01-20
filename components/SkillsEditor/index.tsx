import { Plus, X } from 'react-feather';
import { useEffect, useState } from 'react';
import style from "./style.module.scss";
import { getSkills, createSkill, createSkillItem, deleteSkill, deleteSkillItem } from '../../lib/client/skills';
import { Prisma } from '@prisma/client';
import Skill from '../Skill';

export default function SkillsEditor () {
    const [skills, setSkills] = useState<any[]>([]);

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        const skills = await getSkills();
        setSkills(skills);
    }

    const addSkill = () => {
        const title = prompt('Title of skill set:');

        if(!title) return;

        createSkill({title: title});
        setSkills([...skills, {title: title}]);
    }

    const removeSkill = (skill: any) => {
        deleteSkill(skill.id);
        setSkills(skills.filter(s => s.id !== skill.id));
    }

    const addItem = (skill: any) => {
        const name = prompt('Name of skill:');
        const image = prompt('Image of skill:');

        if(!name || !image) return;

        createSkillItem(skill.id, {
            name: name,
            image: image,
            skill: {
                connect: {
                    id: skill.id
                }
            }
        });
    }

    const removeItem = (item: any) => {
        deleteSkillItem(item.id);

        const newSkills = skills.map(skill => {
            if(skill.id === item.skillId) {
                skill.items = skill.items.filter((i: any) => i.id !== item.id);
            }

            return skill;
        });

        setSkills(newSkills);
    }

    return (
        <div className={style.container}>
            <div className={style['add-skill']}>
                <span>Skills</span>
                <Plus className={style.add} onClick={addSkill}/>
            </div>

            {skills.map((skill: any, i: number) => (
                <div className={style.skill}>
                    <div className={style['add-item']}>
                        <h1>{skill.title}</h1>
                        <Plus className={style.add} onClick={() => {addItem(skill)}}/>
                        <X className={style.delete} onClick={() => {removeSkill(skill)}}/>
                    </div>
                    
                    <div className={style.items}>
                        {skill.items?.map((item: any, j: number) => (
                            <div className={style.item}>
                                <Skill image={item.image} name={item.name} key={item.id}/>
                                <X className={style.delete} onClick={() => {removeItem(item)}}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

