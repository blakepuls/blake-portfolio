import Image from "next/image";
import { BsFileEarmarkText } from "react-icons/bs";

export default function Intro() {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col items-center gap-5 w-full">
        <h1 className="text-left mr-auto text-4xl  text-neutral-200">
          Hello, my name is{" "}
          <span className="bg-gradient-to-r from-primary-600 to-primary-500 font-bold text-transparent bg-clip-text whitespace-nowrap">
            Blake Puls
          </span>
        </h1>

        <h1 className="text-2xl w-full  text-neutral-200">
          and I'm an{" "}
          <span className="bg-gradient-to-r from-primary-600 to-primary-500 font-bold text-transparent bg-clip-text whitespace-nowrap">
            IT Professional
          </span>
        </h1>

        <section className="flex mr-auto gap-3">
          <a
            href="https://docs.google.com/document/d/1gj6wUn5BLLsS5FUJmnsgd1IXbXVhms_1LPMMeFSXQ4M/export?format=pdf"
            className="btn-primary h-12 mr-auto mt-auto"
          >
            View Resume
            <BsFileEarmarkText />
          </a>

          <button className="btn-secondary h-12 mr-auto mt-auto">
            <a href="/projects">View Projects</a>
          </button>
        </section>
      </div>
      <Image
        src="/images/profile.png"
        alt="Profile Picture"
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
        className="rounded-full h-20 w-20  sm:h-52 sm:w-52 shadow-primary "
      />
    </div>
  );
}
