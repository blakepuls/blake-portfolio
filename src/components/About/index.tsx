import Image from "next/image";

interface AboutProps {}

export default function About({}: AboutProps) {
  return (
    <div className="">
      <p className="text-2xl text-neutral-200">
        I'm a self-taught programmer who truly enjoys coding. For the past 5
        years, I've been learning and working with various technologies as a
        freelancer. I'm not afraid of challenges and I'm always ready to learn
        new tools and languages. When I encounter a problem, I see it as an
        opportunity to learn and grow, and I don't stop until I've found a
        solution. Coding isn't just my career choice, it's also my hobby - I
        spend my free time exploring and learning more about it. I'm excited to
        bring this passion, dedication, and problem-solving approach to my first
        professional role in the field.
      </p>
    </div>
  );
}
