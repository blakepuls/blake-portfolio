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

      <section className="mt-5 flex flex-col gap-5">
        <TechnologyContainer title="Languages & Frameworks">
          <Technology name="TypeScript" />
          <Technology name="JavaScript" />
          <Technology name="Node.js" />
          <Technology name="CSharp" src="csharp" />
          <Technology name=".NET" src="dotnet" />
          <Technology name="Python" src="python" />
          <Technology name="PowerShell" rounded={false} />
        </TechnologyContainer>

        <TechnologyContainer title="Databases">
          <Technology name="MySQL" />
          <Technology name="Postgres" />
          <Technology name="MongoDB" />
          <Technology name="Redis" rounded={false} />
        </TechnologyContainer>

        <TechnologyContainer title="Cloud Computing">
          <Technology name="AWS" />
          <Technology name="GCP" />
          <Technology name="Firebase" />
        </TechnologyContainer>

        <TechnologyContainer title="Server & Deployment">
          <Technology name="Linux" />
          <Technology name="Proxmox" />
          <Technology name="Windows Server" src="windows" rounded={false} />
          <Technology name="Docker" />
          {/* <Technology name="Kubernetes" /> */}
          <Technology name="Nginx" />
        </TechnologyContainer>
      </section>
    </main>
  );
}

interface TechnologyContainerProps {
  title: string;
  children: React.ReactNode;
}

function TechnologyContainer({ children, title }: TechnologyContainerProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <h2 className="text-4xl font-semibold text-left text-neutral-200">
        {title}
      </h2>
      <div className="flex flex-wrap gap-3 items-center justify-center w-full backdrop-blur-lg p-3 bg-bg-800 rounded-lg shadow-md bg-opacity-50">
        {children}
      </div>
    </div>
  );
}
