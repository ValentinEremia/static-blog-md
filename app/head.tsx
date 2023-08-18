export default function Head() {
  return (
    <>
      <title>Blog.</title>
      <meta charSet='utf-8' />
      <meta name='mobile-web-app-capable' content='yes' />
		<meta name='apple-mobile-web-app-capable' content='yes' />
    <meta
			name='viewport'
			content='width=device-width, initial-scale=1, viewport-fit=cover'
		/>
      <meta name="description" content="A static blog , written in Markdown and built with Tailwind CSS, Next.js 13, Vercel, and GitHub." />
      <meta name="theme-color" content="#2b2b34"/>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/ apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      
    </>
  );
}
