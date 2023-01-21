import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss';
import { Plus } from 'react-feather';
import Post from '../Post';
import { createPost, getPosts, deletePost, updatePost } from '../../lib/client/posts';
import { Prisma } from '@prisma/client';
import { Save, Edit, Trash } from "react-feather";

interface EditablePostProps {
    post?: Prisma.PostCreateInput;
}

interface Post extends Prisma.PostCreateInput {
    id: number;
    createdAt: Date | undefined;
}

export default function EditablePost(props: EditablePostProps) {
    const contentRef = useRef<HTMLTextAreaElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);

    const [posts, setPosts] = useState<Post[]>([]);
    const [post, setPost] = useState<Post>({
        id: -1,
        title: '',
        content: '',
        image: '',
        createdAt: undefined,
    })


    useEffect(() => {
        onLoad();
    }, []);

    const onLoad = async () => {
        setPosts(await getPosts());
    }

    const reset = () => {
        if (titleRef.current) {
            titleRef.current.value = '';
        }

        if (contentRef.current) {
            contentRef.current.value = '';
        }

        setPost({
            id: -1,
            title: '',
            content: '',
            image: '',
            createdAt: undefined,
        });
    }

    const create = async () => {
        await createPost({
            title: post.title,
            content: post.content,
            image: post.image,
        });
         
        setPosts(await getPosts());
        reset();
    }

    const save = async () => {
        await updatePost(post);
        setPosts(await getPosts());
        reset();
    }

    const del = async (_post: Post) => {
        await deletePost(_post.id);
        reset();
        onLoad();
    }

    return (
        <div className={style.container}>
            <div className={style.posts}>
                <div className={style['new-post']} onClick={() => {
                    setPost({
                        id: -1,
                        title: '',
                        content: '',
                        image: '',
                        createdAt: undefined,
                    })

                    if (titleRef.current) {
                        titleRef.current.value = '';
                    }

                    if (contentRef.current) {
                        contentRef.current.value = '';
                    }
                }}>
                    <Plus className={style.icon}/>
                </div>

                {posts.map((_post, i) => (
                    <div className={`${style.post} ${post.id == _post.id && style.selected}`} onClick={() => {
                        setPost(_post);

                        if (titleRef.current) {
                            titleRef.current.value = _post.title;
                        }
    
                        if (contentRef.current) {
                            contentRef.current.value = _post.content;
                        }
                    }}>
                        <span className={style.title}>{_post.title}</span>
                        <span className={style.id}>ID: {_post.id}</span>
                        <p>{_post.content}</p>
                        <div className={style.fade}></div>
                        <div className={style.controls}>
                            <Trash className={style.icon} onClick={() => {
                                del(_post);
                            }} />
                        </div>
                    </div>
                ))}
            </div>

            <div className={style.editor}>
                <input 
                    type="text"
                    ref={titleRef}
                    placeholder="Title" 
                    className={style.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}/>
                    
                <textarea 
                    placeholder="Body" 
                    ref={contentRef}
                    className={style.body} 
                    onChange={(e) => setPost({...post, content: e.target.value})}/>

                {
                    post.id == -1 ?
                    <button className={style.post} onClick={create}>Post</button> :
                    <button className={style.post} onClick={save}>Save</button>
                }
            </div>

            <div className={style.preview}>
                <Post post={post}/>
            </div>
        </div> 
    )
}