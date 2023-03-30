import Link from "next/link";
import React from "react";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <div>
      <div className="relative py-8 md:py-12 flex w-full  items-center ">
        

        <h1 className="text-4xl  font-extrabold mx-auto text-slate-800 ">
          About
        </h1>
      </div>

      <hr className=" my-8 md:my-12" />

      <article className="prose">
        <section>
          {" "}
          <div className=" my-1   flex w-full  items-center justify-start ">
            <img
              className=" m-1 h-10 rounded-full"
              src="/PozaProfil.jpg"
              alt="/"
            />

            <h2 className="ml-2 my-auto">Me.</h2>
          </div>
          <p>
            Hey, I'm Valentin. I'm a front-end developer, currently a
            freelancer, and I focus on developing my coding skills, and I try to
            get involved in as many projects as possible (mostly case studies),
            where I apply what I've learned lately.{" "}
          </p>
          <p>
            I am passionate about many creative activities including drawing,
            photography, video and of course coding. This combination of
            interests eventually led me to my current role in building the most
            useful and beautiful interfaces for web and mobile applications.
          </p>
          <p>
            I love building for the web. From something as simple as a single
            HTML file - to large Next.js applications. The web is incredible.
            Anyone can become a developer, writer or creator – and no one has to
            ask for permission. You can only build.
          </p>
          <p>
            Apart from that, I am also passionate about fishing and fitness.
          </p>
        </section>

        <section>
          <div className=" my-1   flex w-full  items-center justify-start ">
            <h2 className="  my-auto">Blog.</h2>
          </div>
          <p>
            This blog is a simple application where I tried to learn the new
            structure and routing of a NextJs 13 project.
          </p>
          <p>
            It is a static blog where the posted articles are markdown files.
          </p>
          <p>
            The styling is done with TailwindCSS, and the hosting is on
            "vercel.com". The deployment was done with the help of Vercel CLI
          </p>
        </section>
      </article>
    </div>
  );
}
