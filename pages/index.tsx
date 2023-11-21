import Contact from "@/components/Contact";
import { useState } from "react";
import ja from "@/components/locale/ja";
import en from "@/components/locale/en";
import vn from "@/components/locale/vn";
import fr from "@/components/locale/fr";
import AboutPage from "./about";
import Header from "@/components/Navbar";
import Head from "next/head";
import Homepage from "@/components/Home";
import Content from "@/components/Content";
import Completed from "@/components/Completed";
import Blog from "@/components/Blog";
import Contributors from "@/components/Contributors";
import Footer from "@/components/Footer";
import React from "react";
import Modal from "@/components/Modal";

export default function Home() {
  const [language, setLanguage] = useState("GB");
  const [t, setT] = useState(en);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const changeLanguage = (e: any) => {
    setLanguage(e);
    if (e === "JP") {
      setT(ja);
    } else {
      if (e === "GB") {
        setT(en);
      } else {
        if (e === "VN") {
          setT(vn);
        } else {
          setT(fr);
        }
      }
    }
  };
  return (
    <>
      <div className="z-20">
        <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="w-full">
        <Head>
          <title>Smile Eyes Charity</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <div className="bg-white dark:text-black">
          <div className="sticky top-0 z-10">
            <Header language={language} setLanguage={changeLanguage} t={t} />
          </div>
          <div className="mt-5">
            <div>
              <Homepage setModalIsOpen={setIsOpen} t={t} />
              <Content setModalIsOpen={setIsOpen} t={t} />
              <Completed />
              <Blog />
              <Contributors />
              <AboutPage />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
