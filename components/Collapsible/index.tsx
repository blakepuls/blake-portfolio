"use client";

import { useState } from 'react';
import style from './style.module.scss';

export default function Collapsible(props: Partial<{children: React.ReactNode[], width: number, className: string}>) {
    const [current, setCurrent] = useState(0);

    if(!props.children) return null;

    // if (width < (props.width || 0)) {
    //     return (
    //         <div className={style.container}>
    //             <button className={style.nav} onClick={() => {setCurrent(current - 1)}}>Left</button> 
    //             {props.children[current % props.children.length]}
    //             <button className={style.nav} onClick={() => {setCurrent(current + 1)}}>Right</button>
    //         </div>
    //     )
    // }

    return ( 
        <div className={style.children}>
            {props.children}
        </div>
    )
}