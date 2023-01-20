import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { Plus } from 'react-feather';
import Post from '../Post';
import { getAbout, createAbout, updateAbout } from '../../lib/client/about';
import { Prisma } from '@prisma/client';
import { Save, Camera } from "react-feather";

interface AboutEditorPostProps {
    post?: Prisma.PostCreateInput;
}

export default function AboutEditor(props: AboutEditorPostProps) {
    const [name, setName] = useState(''); 
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [image, setImage] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [github, setGithub] = useState('');

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        const _about = await getAbout('');
        if (_about) {
            setName(_about.name);
            setTitle(_about.title);
            setAbout(_about.content);
            setImage(_about.image);
            setLinkedIn(_about.linkedin);
            setGithub(_about.github);
        }
    }

    const save = async () => {
        const _about = await getAbout('');
        if (_about) {
            await updateAbout('', { name, title, image, linkedin: linkedIn, github, content: about });
        } else {
            await createAbout('', { name, title, image, linkedin: linkedIn, github, content: about });
        }
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.image} style={{backgroundImage: `url(${image})`}} onClick={() => setImage(prompt('Image URL') || '')}>
                    <Camera className={style.icon} />
                </div>
                <div className={style.inputs}>
                    <input className={style.name} placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                    <input className={style.title} placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
            </div>

            <div className={style.socials}>
                <input placeholder='LinkedIn' value={linkedIn} onChange={e => setLinkedIn(e.target.value)} />
                <input placeholder='Github' value={github} onChange={e => setGithub(e.target.value)} />
            </div>

            <textarea className={style.about} placeholder='About' value={about} onChange={e => setAbout(e.target.value)} />
            <button className={style.save} onClick={save}>Save</button>
        </div> 
    )
}