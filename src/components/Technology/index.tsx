import Image from "next/image";
import fs from "fs";

interface TechnologyProps {
  name: string;
  src?: string;
}

export default function Technology({ name, src }: TechnologyProps) {
  return (
    <div className="flex backdrop-blur-lg justify-center p-3 bg-bg-800 rounded-md shadow-md bg-opacity-50 items-center gap-3">
      <Image
        src={
          src
            ? `/images/technology/${src}.svg`
            : `/images/technology/${name}.svg`
        }
        alt={name}
        width={50}
        height={50}
        className="rounded-full h-16 w-16 "
      />
      <span className="text-3xl text-neutral-200">{name}</span>
    </div>
  );
}
