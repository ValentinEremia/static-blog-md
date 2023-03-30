import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import Link from "next/link";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const coverImageOfPost=post.data.coverImage;
   
  return (
    <div>
      
        <div className=" my-8 md:my-12 text-center  ">
        
        { post.data.coverImage === undefined  ? null :
        // <Image
        //   src={coverImageOfPost}
        //   width={700}
        //   height={700}
        //   className="my-0 mx-auto mb-3 md:mb-8"
        //   alt={`cover image of ${post.data.title} blog`} 
        // />
        
        <img className="rounded-md w-full " src={coverImageOfPost} alt={`cover image of ${post.data.title} blog`}   />
        }
       
         
          <h1 className="text-4xl  font-extrabold text-slate-800 ">{post.data.title}</h1>
          <br />
          <br className="hidden sm:block"/>
          <hr />
         
            <p className="text-slate-400 mt-2 text-left   ">{post.data.date}</p>
            
           
          
        </div>

        <article className="prose">
          <Markdown>{post.content}</Markdown>
        </article>
      
    
    </div>
  );
} 
