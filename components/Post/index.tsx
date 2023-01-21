'use client'

import style from './style.module.scss';
import ReactMarkdown from 'react-markdown';
import { Prisma } from '@prisma/client';
interface Post extends Prisma.PostCreateInput {
    id: number;
    createdAt: Date | undefined;
}

export default function Post(props: { post: Post }) {
    const getDateString = (_date: Date) => {
        const date = new Date(_date);

        const formatter = new Intl.DateTimeFormat('en', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        return formatter.format(date);
    }

    return (
        <div className={style['container']} id={`post-${props.post.id}`}>
            <div className={style.header}>
                <span className={style.title}>{props.post.title || 'Title'}</span>
                <span className={style.date}>{getDateString(props.post.createdAt || new Date())}</span>
            </div>
            
            <div className={style.body}>
                <ReactMarkdown
                    className={style.markdown}>
                    {props.post.content || 'Body'}
                </ReactMarkdown>
            </div>
        </div> 
    )
}