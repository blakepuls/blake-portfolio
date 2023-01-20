'use client';

import { Prisma } from '@prisma/client';
import { useEffect, useState } from 'react';
import { getPosts } from '../../lib/client/posts';
import Post from '../../components/Post';
import style from './style.module.scss';

interface Post extends Prisma.PostCreateInput {
    id: number;
    createdAt: Date | undefined;
}

export default function page() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        setPosts(await getPosts());
    }

    return (
        <div className='page'>
            <h1>Blog</h1>
            
            <div className={style.posts}>
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>

        </div>
    )
}