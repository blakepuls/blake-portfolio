import { Prisma } from '@prisma/client';
import Post from '../../components/Post';
import style from './style.module.scss';
import { useSearchParams } from 'next/navigation';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface Post extends Prisma.PostCreateInput {
    id: number;
    createdAt: Date | undefined;
}

export default async function page() {
    const posts = await prisma.post.findMany({
        orderBy: {
            id: 'desc'
        }
    })

    return (
        <div className='page'>
            <h1>Blog</h1>
            
            <div className={style.posts}>
                {posts?.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>

        </div>
    )
}