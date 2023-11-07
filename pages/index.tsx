import { Inter } from "next/font/google";
import Contact from "@/components/Contact";
import { useState } from "react";
import ja from "@/components/locale/ja";
import en from "@/components/locale/en";
import vn from "@/components/locale/vn";
import AboutPage from "./about";
import Header from "@/components/Navbar";
import Head from "next/head";
import Homepage from "@/components/Home";
import Content from "@/components/Content";
import Completed from "@/components/Completed";
import Blog from "@/components/Blog";
import Contributors from "@/components/Contributors";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [language, setLanguage] = useState("GB");
  const [t, setT] = useState(en);
  const [page, setPage] = useState("home");
  const changeLanguage = (e: any) => {
    setLanguage(e);
    if (e === "JP") {
      setT(ja);
    } else {
      if (e === "GB") {
        setT(en);
      } else {
        setT(vn);
      }
    }
  };
  const changePage = (e: any) => {
    setPage(e);
  };
  return (
    <>
      <Head>
        <title>Smile Eyes Charity</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-white dark:text-black">
        <div className="sticky top-0 z-50">
          <Header
            language={language}
            setLanguage={changeLanguage}
            t={t}
            changePage={changePage}
          />
        </div>
        <div className="mt-5">
          <div>
            <Homepage t={t} />
            <Content t={t} />
            <Completed />
            <Blog />
            <Contributors />
            <Contact />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
