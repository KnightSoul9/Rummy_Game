import "@/styles/globals.css";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    document.body.style.overscrollBehavior = "none";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
      document.body.style.overscrollBehavior = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen pb-16 bg-gradient-to-b from-customBeige via-customBeige to-customBeige">
      <div className="fixed inset-0 bg-gradient-to-br from-green-100/30 via-transparent to-transparent pointer-events-none" />
      <Header />
      <main className="relative z-10">
        <Component {...pageProps} />
      </main>
      <Navbar />
    </div>
  );
}
