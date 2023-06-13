import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type PostData = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
};

async function getSortedPostsData(): Promise<PostData[]> {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
      } as PostData;
    })
  );

  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
}

export default async function Blog() {
  const posts = await getSortedPostsData();

  return (
    <main className="w-full h-full flex flex-col gap-10">
      {posts.map((post) => (
        <div
          key={post.id}
          className="p-3 bg-bg-800 rounded-md shadow-md bg-opacity-50 backdrop-blur-lg"
        >
          <div className="flex w-full gap-3">
            <h2 className="text-3xl ">{post.title}</h2>
            <p className="ml-auto whitespace-nowrap">{post.date}</p>
          </div>

          <div
            className="markdown mt-3"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      ))}
    </main>
  );
}
