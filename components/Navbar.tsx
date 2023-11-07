import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SelectL from "./selectL";

interface props {
  language: string;
  setLanguage(e: any): void;
  t: any;
  changePage: any;
}

const Header = (props: props) => {
  const option = [
    {
      value: "en",
      label: "English",
    },
    { value: "vn", label: "Tiếng việt" },
    { value: "ja", label: "日本語" },
  ];
  const flag = [
    {
      value: "en",
      label: (
        <Image
          className="w-6 h-4"
          width={40}
          height={40}
          src="https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg"
          alt=""
        />
      ),
    },
    {
      value: "vn",
      label: (
        <Image
          className="w-6 h-4"
          width={40}
          height={40}
          src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
          alt=""
        />
      ),
    },
    {
      value: "ja",
      label: (
        <Image
          className="w-6 h-4"
          width={40}
          height={40}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png"
          alt=""
        />
      ),
    },
  ];
  return (
    <div className="bg-xanh-le flex flex-row justify-between p-4 items-center">
      <a
        onClick={() => props.changePage("home")}
        className="flex flex-row items-center gap-5 mx-5"
        href="#"
      >
        <Image src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="text-vang-khe text-2xl">SMILE EYES CHARITY</p>
      </a>
      <div className="flex flex-row justify-between gap-5 mx-5">
        <Link href="/">
          <div
            onClick={() => props.changePage("home")}
            className="text-lg pt-1 text-white hover:text-vang-khe"
          >
            {props.t.PROJECT}
          </div>
        </Link>
        <a
          onClick={() => props.changePage("home")}
          className="text-lg pt-1 text-white hover:text-vang-khe"
          href="#achievements"
        >
          {props.t.ACHIEVEMENT}
        </a>

        <a
          onClick={() => props.changePage("home")}
          className="text-lg pt-1 text-white hover:text-vang-khe"
          href="#blog"
        >
          {props.t.BLOG}
        </a>
        <a
          onClick={() => props.changePage("home")}
          className="text-lg pt-1 text-white hover:text-vang-khe"
          href="#sponsors"
        >
          {props.t.SPONSORS}
        </a>

        <Link href="/about">
          <div className="text-lg pt-1 text-white hover:text-vang-khe">
            {props.t.QACONTACT}
          </div>
        </Link>
        <SelectL language={props.language} setLanguage={props.setLanguage} />
      </div>
    </div>
  );
};

export default Header;
