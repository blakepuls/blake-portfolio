"use client";

import '../styles/globals.scss'
import { useState, useEffect } from 'react';
import { GitHub, Linkedin } from 'react-feather';
import Link from 'next/link';
import style from './layout.module.scss'
import FloatingCubes from "../components/FloatingCubes";
import Controls from '../components/FloatingCubes/Controls';
import { usePathname } from 'next/navigation'
import { getAbout } from '../lib/client/about';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
 }) {
  const pathName = usePathname();
  const [about, setAbout] = useState<any>();
  const [cubesConfig, setCubesConfig] = useState({
    amount: 75,
    range: 10,
    minScale: 1,
    maxScale: 3,
    speed: 1,
    rotation: 2
  });

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    const _about = await getAbout();
    if (_about) {
      setAbout(_about);
    }
  }

  return (
    <html>
      <head></head>
      <body>
        <div className={style.header}>
          <div className={style.nav}>
            {
              pathName === '/home' ? (
                <Link className={style.link} href='/blog'>
                  Blog
                </Link>
              ) : (
                <Link className={style.link} href='/home'>
                  Home
                </Link>
              )
            }
          </div>

          <Controls config={cubesConfig} onChange={setCubesConfig} className={style.controls}/>
          
          {about && (
            <div className='socials'>
              <Link className={style.link}  href={about?.github}>
                <GitHub className={style.icon}/>
              </Link>
              <Link className={style.link} href={about?.linkedin}>
                <Linkedin className={style.icon}/>
              </Link>
            </div>
          )}
        </div>


        <div className={style.main}>
          {children} 
        </div>

        <div className={style.animation}>
            <FloatingCubes background='#000' config={cubesConfig} />
        </div>
        
        <div className={style.vignette}/>
      </body>
    </html>
  )
}
