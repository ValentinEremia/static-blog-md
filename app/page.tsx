import PostPreview from "@/components/PostPreview";
import getPostMetadata from "@/components/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";


const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

// export function dateSortDesc(a: string, b: string) {
//   if (a > b) return -1;
//   if (a < b) return 1;
//   return 0;
// }

export default function HomePage() {
  const postMetaData = getPostMetadata();
  const postPreviews = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  




  return (
     
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
        {postPreviews} 
       
      </div>

  );
}
