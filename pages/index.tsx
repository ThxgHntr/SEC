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
      <div className="w-full overflow-x-hidden md:overflow-x-visible">
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
              <Completed t={t} />
              <Blog t={t} />
              <Contributors t={t} />
              <AboutPage t={t} />
              <iframe
                className="mx-auto pt-4 w-full max-w-7xl"
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122940.32531454475!2d107.71879703731044!3d15.651102307050596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316a09486e636723%3A0x61975a50a04280b2!2sC%C3%A0%20Dy%2C%20Nam%20Giang%20District%2C%20Qu%E1%BA%A3ng%20Nam%2C%20Vietnam!5e0!3m2!1sen!2s!4v1700631246936!5m2!1sen!2s"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>
            </div>
            <Footer t={t} />
          </div>
        </div>
      </div>
    </>
  );
}
