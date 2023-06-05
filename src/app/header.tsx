"use client";

import { usePathname } from "next/navigation";
import { NavItem } from "./layout";

export function NavItems() {
  const pathname = usePathname();

  return (
    <>
      {pathname == "/" && (
        <>
          <NavItem href="/blog" label="Blog" newTab={false} />
          <NavItem href="/projects" label="Projects" newTab={false} />
        </>
      )}

      {pathname == "/blog" && (
        <>
          <NavItem href="/" label="About" newTab={false} />
          <NavItem href="/projects" label="Projects" newTab={false} />
        </>
      )}

      {pathname == "/projects" && (
        <>
          <NavItem href="/" label="About" newTab={false} />
          <NavItem href="/blog" label="Blog" newTab={false} />
        </>
      )}
    </>
  );
}
