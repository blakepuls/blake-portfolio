import Image from "next/image";
import { BsFileEarmarkText } from "react-icons/bs";

export default function Intro() {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col items-center gap-5 w-full">
        {/* <p className="max-w-lg text-2xl text-neutral-200">
          I'm a self-taught programmer who truly enjoys coding. For the past 5
          years, I've been learning and working with various technologies as a
          freelancer. I'm not afraid of challenges and I'm always ready to learn
          new tools and languages. When I encounter a problem, I see it as an
          opportunity to learn and grow, and I don't stop until I've found a
          solution. Coding isn't just my career choice, it's also my hobby - I
          spend my free time exploring and learning more about it. I'm excited
          to bring this passion, dedication, and problem-solving approach to my
          first professional role in the field.
        </p> */}

        <h1 className="text-left mr-auto text-4xl  text-neutral-200">
          Hello, my name is{" "}
          <span className="bg-gradient-to-r from-primary-600 to-primary-500 font-bold text-transparent bg-clip-text whitespace-nowrap">
            Blake Puls
          </span>
        </h1>

        <h1 className="text-2xl w-full  text-neutral-200">
          and I'm a{" "}
          <span className="bg-gradient-to-r from-primary-600 to-primary-500 font-bold text-transparent bg-clip-text whitespace-nowrap">
            Fullstack Developer
          </span>
        </h1>

        <section className="flex mr-auto gap-3">
          <button className="btn-primary h-12 mr-auto mt-auto">
            View Resume
            <BsFileEarmarkText />
          </button>

          <button className="btn-secondary h-12 mr-auto mt-auto">
            <a href="/projects">View Projects</a>
            {/* View Projects */}
          </button>
        </section>
      </div>
      <Image
        src="/images/profile.gif"
        alt="Profile Picture"
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
        className="rounded-full h-20 w-20  sm:h-52 sm:w-52 shadow-primary "
      />
    </div>
  );
}
