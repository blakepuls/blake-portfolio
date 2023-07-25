"use client";

import Image from "next/image";
import { useState } from "react";

export type ProjectData = {
  id: string;
  title: string;
  thumbnail: string;
  sourceCodeLink: string;
  blogPostLink: string;
  techUsed: string[];
  private: boolean;
  description: string;
  order: number;
};

interface ProjectProps {
  project: ProjectData;
}

export function Project({ project }: ProjectProps) {
  const [showPrivate, setShowPrivate] = useState(false);

  function handleShowPrivate() {
    setShowPrivate(true);

    setTimeout(() => {
      setShowPrivate(false);
    }, 3000);
  }

  return (
    <div className="w-96 h-[45.25rem] relative ">
      <div
        className={`flex items-center justify-center overflow-hidden bg-red-500 transition-all duration-500 w-full shadow-md text-xl absolute rounded-t-md z-10 ${
          showPrivate ? "h-10 " : "h-0 "
        }`}
      >
        Private Source
      </div>
      <div className="flex flex-col p-3 gap-3 bg-bg-800 rounded-md shadow-md bg-opacity-50 items-center h-full backdrop-blur-lg">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={500}
          height={500}
          className="rounded-md w-full h-44 shadow-md "
        />
        <div className="flex items-center w-full">
          <span className="text-3xl mr-auto text-neutral-200">
            {project.title}
          </span>

          <button
            className="btn-secondary ml-auto"
            onClick={() => {
              if (project.private) return handleShowPrivate();

              window.open(project.sourceCodeLink, "_blank");
            }}
          >
            Source Code
          </button>
        </div>

        <div
          className="markdown overflow-y-auto"
          dangerouslySetInnerHTML={{
            __html: project.description,
          }}
        />

        <div className="flex flex-wrap gap-3 items-center justify-center w-full mt-auto ">
          {project.techUsed.map((tech) => {
            let imgSrc = tech;

            switch (tech) {
              case "C#":
                imgSrc = "csharp";
                break;
              case ".NET":
                imgSrc = "dotnet";
                break;
            }

            return <Tech key={tech} tech={tech} />;
          })}
        </div>
      </div>
    </div>
  );
}

interface TechProps {
  tech: string;
}

export function Tech({ tech }: TechProps) {
  const [showImage, setShowImage] = useState(true);

  let imgSrc = tech;

  switch (tech) {
    case "C#":
      imgSrc = "csharp";
      break;
    case ".NET":
      imgSrc = "dotnet";
      break;
  }

  return (
    <div className="flex justify-center p-1 bg-gradient-to-r from-bg-800  to-bg-700 h-10 rounded-md shadow-md bg-opacity-50 items-center gap-1">
      {showImage && (
        <Image
          src={`/images/technology/${imgSrc}.svg`}
          alt={tech}
          width={50}
          height={50}
          onError={(e) => {
            setShowImage(false);
          }}
          className="rounded-full shadow-md w-8 h-8 "
        />
      )}
      <span className="text-md text-neutral-200 ">{tech}</span>
    </div>
  );
}
