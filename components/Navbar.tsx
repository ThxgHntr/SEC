import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SelectL from "./selectL";

interface props {
  language: string;
  setLanguage(e: any): void;
  t: any;
}

const Header = (props: props) => {
  return (
    <div className="bg-xanh-le flex flex-row justify-between p-4 items-center ">
      <a className="flex flex-row items-center gap-5 mx-5" href="#">
        <Image src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="text-vang-khe text-2xl">SMILE EYES CHARITY</p>
      </a>
      <div className="flex flex-row justify-between gap-5 mx-5">
        <a
          href="#project"
          className="text-lg pt-1 text-white hover:text-vang-khe"
        >
          {props.t.PROJECT}
        </a>
        <a
          className="text-lg pt-1 text-white hover:text-vang-khe"
          href="#achievements"
        >
          {props.t.ACHIEVEMENT}
        </a>

        <a className="text-lg pt-1 text-white hover:text-vang-khe" href="#blog">
          {props.t.BLOG}
        </a>
        <a
          className="text-lg pt-1 text-white hover:text-vang-khe"
          href="#sponsors"
        >
          {props.t.SPONSORS}
        </a>

        <a
          href="#contact"
          className="text-lg pt-1 text-white hover:text-vang-khe"
        >
          {props.t.QACONTACT}
        </a>

        <SelectL language={props.language} setLanguage={props.setLanguage} />
      </div>
    </div>
  );
};

export default Header;
