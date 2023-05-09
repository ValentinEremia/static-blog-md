import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";
import { DateTime  } from 'luxon'

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const allPosts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  // Sort posts by date
  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // const sortBlogPostsByDate = allPosts.sort((a, b) => {
  //   const beforeDate = DateTime.fromFormat(a.date, 'm-d-yyyy')
  //   const afterDate = DateTime.fromFormat(b.date, 'm-d-yyyy')
  //   return afterDate - beforeDate
  // })

  // return sortBlogPostsByDate

  // return allPosts
};

export default getPostMetadata;

 