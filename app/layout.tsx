import Header from "@/components/Header";
import "../styles/globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body >
        <div className="mx-auto lg:max-w-3xl md:max-w-2xl px-6  ">
          <Header/>
         {children}
         <Footer/>
        </div>
      </body>
    </html>
  );
}
