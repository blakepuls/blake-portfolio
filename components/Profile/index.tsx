// import { useEffect } from 'react';
import style from './style.module.scss';
import { Prisma } from '@prisma/client';

interface ProfileProps {
    about?: Prisma.AboutCreateInput | null;
}

export default function Profile(props: ProfileProps) {
    // useEffect(() => {
    //     onLoad();
    // }, []);

    const onLoad = async () => {
    
    }

    return (
        <div className={style.container}>
            <img className={style.picture} src={props.about?.image}/>
            <div className={style.info}>
                <span className={style.name}>{props.about?.name}</span>
                <span className={style.title}>{props.about?.title}</span>
            </div>
        </div>
    )
}