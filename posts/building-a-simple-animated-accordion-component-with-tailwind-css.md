---
title: "Building a Simple Animated Accordion Component with Tailwind CSS"
subtitle: "In the interface design, an accordion is a UI element that displays two-level information: A title, a summary of the content (always visible), and a description, generally reachable via action (click, tap, etc.). "
date: "18-08-2023"
coverImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--QM4O_fvK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2xnumt3ui9rk4xu4v0jt.png"
---


# Building a Simple Animated Accordion Component with Tailwind CSS

[#tailwindcss](https://dev.to/t/tailwindcss) [#tutorial](https://dev.to/t/tutorial) [#nextjs](https://dev.to/t/nextjs) [#vue](https://dev.to/t/vue)

#### [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#live-demo-download)**[Live Demo](https://cruip-tutorials.vercel.app/animated-accordion/) / [Download](https://github.com/cruip/cruip-tutorials/blob/main/animated-accordion/index.html)**

In the interface design, an accordion is a UI element that displays two-level information: A title, a summary of the content (always visible), and a description, generally reachable via action (click, tap, etc.). To simplify:

Accordion = Title (always visible) + Description (reachable via action).

Unlike the many other tutorials on building a responsive accordion, we at Cruip will focus on **creating an essential animated and accessible accordion using just Tailwind CSS classes**, and we will also show you how to create similar reusable components in React and Vue.

If you’ve previously come across our [Tailwind CSS templates](https://cruip.com/), you probably know we use accordions extensively. If you’re interested in seeing some of them in action, please take a look at our [elegant HTML website template](https://cruip.com/tidy/), or our [simple website template](https://cruip.com/simple/).

Quick navigation

-   [HTML version](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#HTML%20version)
-   [Nextjs version](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#Nextjs%20version)
-   [Vue version](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#Vue%20version)

Curious to see how it works? Let’s let’s jump right in!

___

## [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#creating-the-accordion-in-html)Creating the accordion in HTML

Let’s kick things off with a **new HTML document**. To keep it simple, we’ll import Tailwind CSS using the CDN. Here’s the snippet:  

```
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="utf-8">
      <title>Animated Accordiom</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.x.x/dist/cdn.min.js"></script>
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      <script>
          tailwind.config = {
              theme: {
                  extend: {
                      fontFamily: {
                          inter: ['Inter', 'sans-serif'],
                      },
                  },
              },
          };
      </script>
  </head>
  <body class="relative font-inter antialiased">
      <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
          <div class="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
              <h1 class="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
              <!-- Accordion component -->
          </div>
      </main>
  </body>
  </html>
```

Enter fullscreen mode Exit fullscreen mode

Now, let’s replace that comment with the accordion code. Here’s what it looks like:  

```
  <div>
      <!-- Accordion item -->
      <div>
          <h2>
              <button id="faqs-title-01" type="button">
                  What are the advantages of your service?
              </button>
          </h2>
          <div id="faqs-text-01" role="region">
              <p>
                  If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
              </p>
          </div>
      </div>                                                                                              
  </div>
```

Enter fullscreen mode Exit fullscreen mode

We’ve kept the HTML structure simple and lightweight. Each accordion item consists of a `button` element, which serves as the title, and a `div` element as a container for the item’s content.

### [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#styling-the-accordion-with-tailwind-css)Styling the accordion with Tailwind CSS

Let’s proceed by **adding some style** with Tailwind CSS classes, and an **SVG icon** to indicate whether each accordion item is open or closed:  

```
  <div class="divide-y divide-slate-200">
      <!-- Accordion item -->
      <div class="py-2">
          <h2>
              <button
                  id="faqs-title-01"
                  type="button"
                  class="flex items-center justify-between w-full text-left font-semibold py-2"
              >
                  <span>What are the advantages of your service?</span>
                  <svg class="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" />
                      <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" />
                  </svg>
              </button>
          </h2>
          <div
              id="faqs-text-01"
              role="region"
              class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
          >
              <p class="pb-3">
                  If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
              </p>
          </div>
      </div>                                                                                              
  </div>
```

Enter fullscreen mode Exit fullscreen mode

Now, with the code above, we’ve got a single accordion item, expanded by default, and a neat SVG icon representing the plus symbol. It’s starting to look good! However, while we could continue working solely in CSS to make the accordion fully functional, we have accessibility in mind. This is why we’ll need to add a bit JavaScript logic.

### [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#using-alpinejs-to-handle-accordion-functionality)Using Alpine.js to handle accordion functionality

Alpine.js is our go-to lightweight JavaScript framework that perfectly complements Tailwind CSS, enabling us to add interactivity without writing a single line of JavaScript.

To **manage each accordion item separately**, our approach is to define an `expanded` variable for each item, indicating whether it’s open or closed. Thanks to Alpine.js’ `x-data` directive, this is super easy!

Then, we’ll make the following implementations:

-   We’ll toggle the value of the `expanded` variable when the user clicks on the accordion item’s title, using the `@click` directive.
-   We’ll manage the Tailwind classes on the SVG icon, so that it smoothly transitions from a plus symbol to a minus symbol when the accordion item opens.
-   Based on the value of the `expanded` variable, we’ll show or hide the accordion item’s content using the `x-show` directive.

```
  <div class="divide-y divide-slate-200">
      <!-- Accordion item -->
      <div x-data="{ expanded: false }" class="py-2">
          <h2>
              <button
                  id="faqs-title-01"
                  type="button"
                  class="flex items-center justify-between w-full text-left font-semibold py-2"
                  @click="expanded = !expanded"
              >
                  <span>What are the advantages of your service?</span>
                  <svg class="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" />
                      <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{'!rotate-180': expanded}" />
                  </svg>
              </button>
          </h2>
          <div
              id="faqs-text-01"
              role="region"
              class="text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
              x-show="expanded"
          >
              <p class="pb-3">
                  If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
              </p>
          </div>
      </div>                                                                                              
  </div>
```

Enter fullscreen mode Exit fullscreen mode

It works like a charm! But hold on, remember, we promised to make it animated! So, we’ll remove the `x-show` directive and try out a different strategy. We could certainly use Alpine.js’ `x-transition` directives, but ee’ve got something even simpler in mind.

### [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#managing-the-accordion-animation-with-tailwind-classes)Managing the accordion animation with Tailwind classes

The idea is to animate the height and opacity of the accordion item’s content. But **animating the height of an HTML element can be a bit tricky**, especially when dealing with the `height: auto` property.

We can’t simply toggle the `h-0` and `h-auto` classes to animate the height of an HTML element from 0 to 100%. The `height: auto` property doesn’t provide a numeric value that can be interpolated during transitions, making the animation challenging without JavaScript.

Now, the question is: _are there other CSS solutions that allow us to animate the height of an HTML element?_ Actually, [there are a couple](https://css-tricks.com/using-css-transitions-auto-dimensions/), but there’s one we particularly like, and it’s not widely mentioned.

I’m talking about using **CSS grid**. Yes, you heard it right! It’s a trick that involves creating a CSS grid with a single grid item and applying a transition to the `grid-template-rows` property from `0fr` to `1fr`.

Let’s see how it works:  

```
  <div
      id="faqs-text-01"
      role="region"
      class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
      :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
  >
      <div class="overflow-hidden">
          <p class="pb-3">
              If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
          </p>
      </div>
  </div>
```

Enter fullscreen mode Exit fullscreen mode

Here’s what we’ve done:

-   We added the `grid` class to the HTML element containing the accordion item’s content.
-   By using Tailwind’s arbitrary values, we applied the `grid-rows-[1fr]` and `grid-rows-[0fr]` classes to control the height of the HTML element based on the current state of the `expanded` variable.
-   To ensure that the animation works flawlessly, we included the `overflow-hidden` class on the HTML element containing the accordion item’s content.

One crucial thing to keep in mind is that you shouldn’t apply the `overflow: hidden` property directly to the element defining the padding. This is why we added an additional `div` to achieve the desired effect flawlessly.

### [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#making-the-accordion-fully-accessible)Making the accordion fully accessible

In the final step of our tutorial, we’re going to ensure that our accordion meets accessibility requirements, making it usable and inclusive for all users, including those who rely on assistive technologies like screen readers.

To make the accordion fully accessible, we need to implement the following integrations:

-   First, we’ll add the `aria-expanded` attribute to the button that acts as the title for each accordion item. This attribute will be linked to the value of the `expanded` variable, indicating whether the item is open or closed.
-   Next, we’ll add the `aria-controls` attribute to the same button. This attribute will be linked to the ID of the HTML element containing the content of the accordion item. It helps establish the relationship between the button and its associated content.
-   Finally, we’ll add the `aria-labelledby` attribute to the HTML element containing the accordion item’s content. This attribute will be linked to the ID of the button that serves as the title for the accordion item, creating a link between the content and its corresponding title.

```
  <div class="divide-y divide-slate-200">
      <!-- Accordion item -->
      <div x-data="{ expanded: false }" class="py-2">
          <h2>
              <button
                  id="faqs-title-01"
                  type="button"
                  class="flex items-center justify-between w-full text-left font-semibold py-2"
                  @click="expanded = !expanded"
                  :aria-expanded="expanded"
                  aria-controls="faqs-text-01"
              >
                  <span>What are the advantages of your service?</span>
                  <svg class="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                      <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{'!rotate-180': expanded}" />
                      <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{'!rotate-180': expanded}" />
                  </svg>
              </button>
          </h2>
          <div
              id="faqs-text-01"
              role="region"
              aria-labelledby="faqs-title-01"
              class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"
              :class="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
          >
              <div class="overflow-hidden">
                  <p class="pb-3">
                      If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
                  </p>
              </div>
          </div>
      </div>                                                                                              
  </div>
```

Enter fullscreen mode Exit fullscreen mode

With these integrations in place, our **accordion is now complete and fully accessible**. Users of all abilities can interact with it comfortably, and assistive technologies will be able to provide a smooth experience.

Now, the only thing left to do is to add additional accordion items, ensuring that each of them has a **unique ID**.

___

## [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#creating-a-nextjs-accordion-component)Creating a Next.js accordion component

If you’re working with Next.js, you can take advantage of the HTML code we’ve created so far, but with some modifications to transform it into a **functional React component**. We’ll utilize React hooks, specifically `useState` and `useEffect`, to handle the accordion’s functionality. Additionally, we’ll use TypeScript to define the types of props, reducing the chance of errors.

Let’s walk through the process of converting the HTML code into a React component:  

```
  'use client'
  import { useState, useEffect } from 'react'
  export default function Accordion() {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
    useEffect(() => {
      setAccordionOpen(false)
    }, [])
    return (
      <div className="py-2">
        <h2>
          <button
            className="flex items-center justify-between w-full text-left font-semibold py-2"
            onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-01`}
          >
            <span>What are the advantages of your service?</span>
            <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            </svg>           
          </button>        
        </h2>
        <div
          id={`accordion-text-01`}
          role="region"
          aria-labelledby={`accordion-title-01`}
          className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="pb-3">
              If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
            </p>
          </div>
        </div>
      </div>
    )
  }
```

Enter fullscreen mode Exit fullscreen mode

As you can see, we’ve defined a variable called `accordionOpen`, which will keep track of whether the accordion item is open or closed. Additionally, we’ve used the `useState` hook to initialize its state. Furthermore, we added a `useEffect` hook to reset the value of `accordionOpen` when the component is mounted, ensuring proper initialization.

Now, this component can be easily used on any Next.js page by simply importing and rendering it like this:  

```
  <Accordion />
```

Enter fullscreen mode Exit fullscreen mode

It works beautifully! However, you may need to use this accordion component on multiple pages, and in that case, it’s helpful to **turn it into a reusable component**. To achieve this, we can **add props** to the component, allowing us to define the title, ID, and content of each accordion item. Additionally, we’ve introduced an `active` prop, enabling us to specify whether the accordion item should be open or closed by default.  

```
  'use client'
  import { useState, useEffect } from 'react'
  type AccordionpProps = {
    children: React.ReactNode
    title: string
    id: string,
    active?: boolean
  }
  export default function Accordion({
    children,
    title,
    id,
    active = false
  }: AccordionpProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
    useEffect(() => {
      setAccordionOpen(active)
    }, [])
    return (
      <div className="py-2">
        <h2>
          <button
            className="flex items-center justify-between w-full text-left font-semibold py-2"
            onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
            aria-expanded={accordionOpen}
            aria-controls={`accordion-text-${id}`}
          >
            <span>{title}</span>
            <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
              <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            </svg>
          </button>
        </h2>
        <div
          id={`accordion-text-${id}`}
          role="region"
          aria-labelledby={`accordion-title-${id}`}
          className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <p className="pb-3">
              {children}
            </p>
          </div>
        </div>
      </div>
    )
  }
```

Enter fullscreen mode Exit fullscreen mode

To use the component, you simply need to import it into a parent component and pass the necessary props. Here’s an example of how to use it:  

```
  export const metadata = {
    title: 'Animated Accordion - Cruip Tutorials',
    description: 'Page description',
  }
  import Accordion from '@/components/accordion'
  export default function AnimatedAccordionPage() {
    const faqs = [
      {
        title: "What are the advantages of your service?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "Are there any fees or commissions in addition to the monthly subscription?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "You really don't charge per user? Why not?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "What happens when I go over my monthly active limit?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: true,
      },
      {
        title: "Can your service help me understand how to work with my product?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "Which third-party application do you integrate with?",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
      {
        title: "I have another question!",
        text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
        active: false,
      },
    ]
    return (
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                {faq.text}
              </Accordion>
            ))}
          </div>
        </div>
      </main>
    )
  }
```

Enter fullscreen mode Exit fullscreen mode

Now you have a **flexible and reusable Next.js accordion component** that can be easily integrated into various parts of your application. It is available in our [GitHub repository](https://github.com/cruip/cruip-tutorials-next/blob/main/components/accordion.tsx) that includes all Next.js examples from our tutorials.

___

## [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#creating-a-vue-accordion-component)Creating a Vue accordion component

If you’re working with Vue, creating an accordion component is straightforward, similar to what we did for React. We’ll use the **Composition API** with the `script setup` syntax, along with **TypeScript** support for added type safety.

Let’s take a look at the code for the initial Vue accordion component:  

```
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const accordionOpen = ref<boolean>(false)
  onMounted(() => {
    accordionOpen.value = false
  })
  </script>
  <template>
    <div class="py-2">
      <h2>
        <button
          id="accordion-title-01"
          class="flex items-center justify-between w-full text-left font-semibold py-2"
          @click.prevent="accordionOpen = !accordionOpen"
          :aria-expanded="accordionOpen"
          aria-controls="accordion-text-01"
        >
          <span>What are the advantages of your service?</span>
          <svg class="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
              <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
          </svg>      
        </button>
      </h2>
      <div
        id="accordion-text-01"
        role="region"
        aria-labelledby="accordion-title-01"
        class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"    
        :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <p class="pb-3">
            If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.
          </p>
        </div>
      </div>    
    </div>
  </template>
```

Enter fullscreen mode Exit fullscreen mode

As you can see, we’ve defined the `accordionOpen` variable using the `ref` function from Vue’s Composition API. This variable keeps track of whether the accordion item is open or closed. Additionally, we’ve included the necessary logic to toggle its state when the user clicks on the accordion title.

This component can be conveniently used on any Vue page by importing and including it like this:  

```
  <Accordion />
```

Enter fullscreen mode Exit fullscreen mode

Now, let’s proceed to transform this component into a **fully reusable** one, just as we did for the React version. We’ll make the same modifications, creating a Vue counterpart of the reusable accordion component:  

```
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  const accordionOpen = ref<boolean>(false)
  const props = defineProps<{
    title: string
    id: string
    active?: boolean
  }>()
  onMounted(() => {
    accordionOpen.value = props.active
  })
  </script>
  <template>
    <div class="py-2">
      <h2>
        <button
          :id="`accordion-title-${id}`"
          class="flex items-center justify-between w-full text-left font-semibold py-2"
          @click.prevent="accordionOpen = !accordionOpen"
          :aria-expanded="accordionOpen"
          :aria-controls="`accordion-text-${id}`"
        >
          <span>{{ title }}</span>
          <svg class="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <rect y="7" width="16" height="2" rx="1" class="transform origin-center transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
              <rect y="7" width="16" height="2" rx="1" class="transform origin-center rotate-90 transition duration-200 ease-out" :class="{ '!rotate-180': accordionOpen }" />
          </svg>      
        </button>
      </h2>
      <div
        :id="`accordion-text-${id}`"
        role="region"
        :aria-labelledby="`accordion-title-${id}`"
        class="grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out"    
        :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <p class="pb-3">
            <slot />
          </p>
        </div>
      </div>    
    </div>
  </template>
```

Enter fullscreen mode Exit fullscreen mode

By adding props to the component, we can now define the title, ID, and content of each accordion item dynamically. The `active` prop also allows us to control whether the accordion item should be open or closed by default.

To use the reusable Vue accordion component, import it into a parent component, and pass the necessary props like this:  

```
  <script setup lang="ts">
  import Accordion from '../components/Accordion.vue'
  const faqs = [
    {
      title: "What are the advantages of your service?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "Are there any fees or commissions in addition to the monthly subscription?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "You really don't charge per user? Why not?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "What happens when I go over my monthly active limit?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: true,
    },
    {
      title: "Can your service help me understand how to work with my product?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "Which third-party application do you integrate with?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "I have another question!",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },    
  ]
  </script>
  <template>
    <main class="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div class="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
        <h1 class="text-2xl font-bold text-slate-900 mb-4">FAQs</h1>
        <div class="divide-y divide-slate-200">
          <template v-for="(faq, index) in faqs">
            <Accordion :title="faq.title" :id="`faqs-${index}`" :active="faq.active">
              {{ faq.text }}
            </Accordion>
          </template>
        </div>
      </div>
    </main>
  </template>
```

Enter fullscreen mode Exit fullscreen mode

Now you have a **versatile and reusable Vue accordion component** ready to be integrated into your Vue applications! It’ i’s available in our [GitHub repository](https://github.com/cruip/cruip-tutorials-vue/blob/main/src/components/Accordion.vue), which includes all the examples from the Cruip tutorials.

___

## [](https://dev.to/cruip_com/building-a-simple-animated-accordion-component-with-tailwind-css-2af7#conclusions)Conclusions

Remember that FAQs are only one way to use this smart UI element. It’s helpful for many other use cases that include a title and description. For example, check out the project terms section of this [quote and invoice Tailwind CSS template](https://cruip.com/quoty/).