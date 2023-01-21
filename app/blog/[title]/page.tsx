import { Prisma } from '@prisma/client';
import Post from '../../../components/Post';
import style from './style.module.scss';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Post extends Prisma.PostCreateInput {
    id: number;
    createdAt: Date | undefined;
}

export default async function page({ 
    params
}: {
    params: {
        title: string;
    }
}) {
    //Deslugify 
    const title = params.title.replaceAll('-', ' ');

    const post = await prisma.post.findFirst({
        where: {
            title: {
                contains: title,
                mode: 'insensitive'
            }
        }
    })

    //Get all posts except the one we're on
    const posts = await prisma.post.findMany({
        where: {
            NOT: {
                title: {
                    contains: title,
                    mode: 'insensitive'
                }
            }
        }
    })
    
    if(!post) 
        return <div className='page'>Post not found</div>

    return (
        <div className='page'>
            <h1>Blog</h1>
            
            <div className={style.posts}>
                <Post key={post.id} post={post} />
                {posts?.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>

        </div>
    )
}