"use client";

import style from "./style.module.scss";
import { useState, useEffect } from "react";
import { Save, Edit, Trash } from "react-feather";
import { Prisma } from "@prisma/client";
import ItemBox from "../ItemBox";
import Project from "../Project";
import { updateProject, createProject, deleteProject } from "../../lib/client/projects"

interface Project {
    id: number | undefined;
    title: string;
    description: string;
    tech: string[];
    source?: string;
    post: string;
    image: string;
}

export default function EditableProject(props: { project: Project, editing?: boolean, onDelete?: () => void }) {
    const [editing, setEditing] = useState(props.editing);
    const [project, setProject] = useState(props.project);
    const [techs, setTechs] = useState(props.project.tech);

    useEffect(() => {
        setProject({ ...project, tech: techs });
    }, [techs]);

    const save = () => {
        if(project.id == -1) {
            project.id = undefined;
            createProject(project as Prisma.ProjectCreateInput);
        }
        else
            updateProject(project);

        setEditing(false); 
    }

    const del = () => {
        props.onDelete && props.onDelete();
        if(project.id != -1) 
            project.id && deleteProject(project.id);
    }

    if (!editing)
        return (
            <div className={style.container}>
                <Project project={project} />

                <div className={style.controls}>
                    <Edit className={style.icon} onClick={() => setEditing(true)} />
                    <Trash className={style.icon} onClick={del} />
                </div>
            </div>
        );

    return (
        <div className={style.container}>
            <div className={style.project}>
                <div className={style.top}>
                    <input
                        className={style.image}
                        placeholder="Image URL"
                        value={project.image}
                        onChange={(e) =>
                            setProject({ ...project, image: e.target.value })
                        }
                        />
                </div>
                <div className={style.bottom}>
                    <div className={style.row}>
                        <input
                            placeholder="Title"
                            value={project.title}
                            onChange={(e) =>
                                setProject({ ...project, title: e.target.value })
                            }
                        />

                        <input
                            placeholder="Blog post"
                            className={style.blog}
                            value={project.post}
                            onChange={(e) => setProject({ ...project, post: e.target.value })}
                        />
                    </div>

                    <textarea
                        placeholder="Description"
                        className={style.description}
                        value={project.description}
                        onChange={(e) =>
                            setProject({ ...project, description: e.target.value })
                        }
                        wrap="soft"
                    />

                    <div className={style.row}>
                        <span className={style.title}>Project</span>

                        <input
                            placeholder="Source"
                            className={style.source}
                            value={project.source}
                            onChange={(e) =>
                                setProject({ ...project, source: e.target.value })
                            }
                        />
                    </div>

                    <ItemBox items={project.tech} onChange={setTechs} />
                </div>
            </div>

            <div className={style.controls}>
                <Trash className={style.icon} onClick={del} />
                <Save className={style.icon} onClick={save} />
            </div>
        </div>
    );
}
