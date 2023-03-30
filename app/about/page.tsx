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
              className=" m-1 h-16 !rounded-full"
              src="/PozaProfil.jpg"
              alt="/"
            />

            <h2 className="ml-2 my-auto">Me.</h2>
          </div>
          <p>
          Hi, my name is Valentin, and I work as a front-end developer, currently operating as a freelancer. I am committed to enhancing my coding abilities and engaging in numerous projects, to apply the newest techniques I have acquired.{" "}
          </p>
          <p>
          I am enthusiastic about various creative pursuits, including drawing, photography, video production, and, of course, coding. This collection of interests has eventually led me to specialize in developing outstanding and functional interfaces for web and mobile applications.
          </p>
          <p>
          Web development is my true passion, and I adore constructing websites, from a single HTML page to complex Next.js applications. The web is an amazing place where anyone can become a developer, a writer, or a creator without asking for permission. The only limitation is your ability to build.
          </p>
          <p>
          In addition to my passion for coding, I also have a keen interest in fishing and staying fit.
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
            Is a static blog project built using modern and performant
            technologies. Here are some of them:
          </p>

          <h3>Markdown</h3>
          <p>
            Static Blog MD uses Markdown files to create blog content. Markdown
            is a simple text formatting language that allows for easily creating
            structured documents.
          </p>
          <h3>Next.js</h3>
          <p>
          Next.js is a React framework used to build modern, scalable, and performant web applications. Static Blog MD uses Next.js 13 to build and deliver the static pages of the blog.
          </p>
          <h3>Tailwind CSS</h3>
          <p>
          Static Blog MD uses Tailwind CSS to manage the CSS styles of the pages. Tailwind CSS is a utility-first CSS framework that allows developers to write styles quickly and easily, using an intuitive and easy-to-understand syntax.
          </p>
          <h3>Vercel</h3>
          <p>
          Static Blog MD is hosted on the Vercel platform. Vercel is a cloud platform that offers hosting and rapid development for static and dynamic web applications. Vercel provides a complete set of tools for building, testing, and deploying web applications, allowing developers to focus on writing quality code and creating excellent products.
          </p>
          <h3>GitHub</h3>
          <p>
          Static Blog MD is available on GitHub, a hosting platform for software projects. On GitHub, developers can collaborate, manage, and share projects, using features such as version control, issues, pull requests, and many others.
          </p>
        </section>
      </article>
    </div>
  );
}
