"use client";

import style from "./style.module.scss";
// import { Prisma } from '@prisma/client';
import { Code } from "react-feather";
import { useState } from "react";
import Link from "next/link";

interface Project {
  id: number | undefined;
  title: string;
  description: string;
  tech: string[];
  source?: string;
  post: string;
  image: string;
}

export default function Project(props: { project: Project }) {
  const [showPrivate, setShowPrivate] = useState(false);

  const privateSource = () => {
    setShowPrivate(true);
    setTimeout(() => setShowPrivate(false), 2000);
  };

  return (
    <div className={style.container}>
      <div
        className={style["private-source"]}
        style={showPrivate ? { height: "50px" } : { height: "0", padding: "0" }}
      >
        Private Source
      </div>

      <div className={style.top}>
        <img className={style.preview} src={props.project.image} />
      </div>
      <div className={style.bottom}>
        <div className={style.row}>
          <span className={style.title}>{props.project.title}</span>
          {props.project.post && (
            <Link className={style.blog} href={props.project.post}>
              View Blog
            </Link>
          )}
        </div>
        <p className={style.description}>{props.project.description}</p>
        <div>
          <span className={style.title}>Project</span>
          <Code
            type="button"
            className={style.source}
            size={30}
            onClick={() => {
              if (props.project.source == "private") privateSource();
              else window.open(props.project.source, "_blank");
            }}
          />
        </div>

        <div className={style.techs}>
          {props.project.tech.map((tech, i) => (
            <span key={i} className={style.tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
