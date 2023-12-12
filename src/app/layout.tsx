import "./globals.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";
import FloatingCubes from "@/components/FloatingCubes";

export const metadata = {
  title: "Blake Puls's Portfolio",
  description: "Explore my projects and posts about software development.",
  openGraph: {
    title: "Blake Puls's Portfolio",
    description: "Explore my projects and posts about software development.",
    url: "https://blakepuls.dev",
    siteName: "Blake Puls",
    locale: "en-US",
    type: "website",
    images: ["https://blakepuls.dev/images/profile.gif"],
  },
};

interface NavItem {
  href: string;
  label?: string;
  icon?: IconType;
  newTab?: boolean;
}

export function NavItem({ newTab, href, label, icon: Icon }: NavItem) {
  return (
    <a href={href} target={newTab ? "_blank" : undefined}>
      <div className="flex items-center gap-1 transition-colors hover:text-primary-500">
        {Icon && <Icon className="text-4xl" />}
        {label && <span className="text-2xl">{label}</span>}
      </div>
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-900">
        <div className="fixed h-full w-full -z-10 ">
          <div className="bg-black bg-opacity-50 absolute h-full w-full z-10"></div>
          <FloatingCubes
            background="#000"
            config={{
              amount: 100,
              speed: 0.5,
              color: "#8423d9",
            }}
          />
        </div>
        <div className="bg-bg-900 bg-opacity-30 h-full w-full fixed -z-10"></div>
        <header className="bg-transparent w-full">
          <div className="flex p-5 py-10 items-center max-w-4xl w-full m-auto h-2 ">
            <div className="w-full sm:block hidden">
              <a href="/" className="text-3xl">
                Blake Puls
              </a>
            </div>
            <nav className="flex gap-5 w-full sm:justify-center items-center">
              <NavItem href="/" label="About" newTab={false} />
              <NavItem href="/projects" label="Projects" newTab={false} />
              <NavItem href="/blog" label="Blog" newTab={false} />
            </nav>
            <nav className="flex items-center w-full justify-end gap-3 ">
              <NavItem
                href="https://www.linkedin.com/in/blake-puls-752a37272/"
                icon={AiFillLinkedin}
              />
              <NavItem
                href="https://github.com/blakepuls"
                icon={AiFillGithub}
              />
            </nav>
          </div>
        </header>

        <div className="max-w-4xl w-full m-auto flex flex-col px-5 pb-5 mt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
