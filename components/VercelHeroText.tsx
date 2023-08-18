import React from 'react'

type Props = {}

export default function VercelHeroText({}: Props) {
    return (
        <div>
          <h1 className="py-14 text-[21vw] text-center sm:text-9xl leading-none select-none tracking-tightest font-extrabold">
  <span data-content="Develop." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-1">
    <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> Develop.</span>
  </span>
  <span data-content="Preview." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-2">
    <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"> Preview.</span>
  </span>
  <span data-content="Ship." className="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-3">
    <span className="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"> Ship.</span>
  </span>
</h1>
        </div>
      );
}