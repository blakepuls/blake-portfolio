import About from "@/components/About";
import Generator from "@/components/FloatingCubes/Generator";
import Intro from "@/components/Intro";
import Technology from "@/components/Technology";

export default async function Home() {
  return (
    <main className="w-full h-full">
      <Intro />

      <section className="mt-10">
        <About />
      </section>

      <section className="flex flex-wrap gap-3 items-center justify-center w-full h-full mt-10">
        <Technology name="Node.js" />
        <Technology name="TypeScript" />
        <Technology name="JavaScript" />
        <Technology name="React" />
        <Technology name="Next.js" />
        <Technology name="Express" />
        <Technology name="tailwindcss" />
        <Technology name="C#" src="csharp" />
        <Technology name=".NET" src="dotnet" />
        <Technology name="Firebase" />
        <Technology name="MySQL" />
        <Technology name="MongoDB" />
        <Technology name="Postgres" />
        <Technology name="Redis" />
        <Technology name="Docker" />
      </section>
    </main>
  );
}
