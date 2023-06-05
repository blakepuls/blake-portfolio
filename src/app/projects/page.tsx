import { Project, ProjectData } from "@/components/Project";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import fs from "fs";
import html from "remark-html";

async function getSortedProjectsData(): Promise<ProjectData[]> {
  const projectsDirectory = path.join(process.cwd(), "src/projects");
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        id,
        title: matterResult.data.title,
        thumbnail: matterResult.data.thumbnail,
        sourceCodeLink: matterResult.data.sourceCodeLink,
        blogPostLink: matterResult.data.blogPostLink,
        techUsed: matterResult.data.techUsed,
        private: matterResult.data.private,
        description: contentHtml,
      } as ProjectData;
    })
  );

  return allProjectsData.sort((a, b) => {
    return a.title < b.title ? 1 : -1; // replace with your preferred sorting method
  });
}

export default async function Projects() {
  const posts = await getSortedProjectsData();

  return (
    <main className="w-full h-full flex flex-wrap justify-center gap-5">
      {posts.map((post) => {
        return (
          <Project
            key={post.id}
            project={{
              id: post.id,
              title: post.title,
              thumbnail: post.thumbnail,
              sourceCodeLink: post.sourceCodeLink,
              blogPostLink: post.blogPostLink,
              techUsed: post.techUsed,
              private: post.private,
              description: post.description,
            }}
          />
        );
      })}
    </main>
  );
}
