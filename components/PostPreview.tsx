import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`} className="card">
      {/* <div className="border border-white/20 p-4 rounded-md transition-all  shadow-sm hover:shadow-md    hover:scale-[1.005] "> */}
      <div className="border border-slate-300 p-4 rounded-md   shadow-sm hover:shadow-md transition-all  hover:scale-[1.005] ">
        <div className="article-card">
          <p className="text-sm text-slate-400  ">{props.date}</p>

          <h2 className=" text-indigo-600 font-medium  mb-4">{props.title}</h2>

          <p className="text-slate-500  ">{props.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
