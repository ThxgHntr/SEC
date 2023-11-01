import Image from "next/image";
import { useState } from "react";

interface props {
  language: string;
  setLanguage: any;
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
        <img
          className="w-6 h-4"
          src="https://vuongquocanh.com/wp-content/uploads/2018/04/la-co-vuong-quoc-anh.jpg"
          alt=""
        />
      ),
    },
    {
      value: "vn",
      label: (
        <img
          className="w-6 h-4"
          src="https://investone-law.com/wp-content/uploads/2019/06/quoc-ky-viet-nam.jpg"
          alt=""
        />
      ),
    },
    {
      value: "ja",
      label: (
        <img
          className="w-6 h-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/225px-Flag_of_Japan.svg.png"
          alt=""
        />
      ),
    },
  ];
  return (
    // <div className="bg-green-700 flex flex-row justify-between h-16 items-center">
    //   <div
    //     onClick={() => props.changePage("home")}
    //     className="mx-5 flex flex-row items-center"
    //   >
    //     <Image src="/logo.svg" alt="logo" width={50} height={50} />
    //     <h1 className=" text-yellow-300 mx-5">SMILE EYES CHARITY</h1>
    //   </div>
    //   <div className="flex flex-row justify-between gap-5 mx-5">
    //     <a
    //       onClick={() => props.changePage("home")}
    //       className="text-lg text-white hover:text-yellow-300"
    //       href="#project"
    //     >
    //       {props.t.PROJECT}
    //     </a>
    //     <a
    //       onClick={() => props.changePage("home")}
    //       className="text-lg text-white hover:text-yellow-300"
    <div className="bg-xanh-le flex flex-row justify-between p-4 items-center">
      <a
        onClick={() => props.changePage("home")}
        className="flex flex-row items-center gap-5 mx-5"
        href="#"
      >
        <img src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="text-vang-khe text-2xl">SMILE EYES CHARITY</p>
      </a>
      <div className="flex flex-row justify-between gap-5 mx-5">
        <a
          onClick={() => props.changePage("home")}
          className="text-lg text-white hover:text-vang-khe"
          href="#project"
        >
          {props.t.PROJECT}
        </a>
        <a
          onClick={() => props.changePage("home")}
          className="text-lg text-white hover:text-vang-khe"
          href="#achievements"
        >
          {props.t.ACHIEVEMENT}
        </a>
        {/* <a
          onClick={() => props.changePage("home")}
          className="text-lg text-white hover:text-yellow-300"
          href="#blog"
        >
          {props.t.BLOG}
        </a>
        <a
          onClick={() => props.changePage("home")}
          className="text-lg text-white hover:text-yellow-300" */}
        <a
          onClick={() => props.changePage("home")}
          className="text-lg text-white hover:text-vang-khe"
          href="#blog"
        >
          {props.t.BLOG}
        </a>
        <a
          onClick={() => props.changePage("home")}
          className="text-lg text-white hover:text-vang-khe"
          href="#sponsors"
        >
          {props.t.SPONSORS}
        </a>
        {/* <a
          onClick={() => props.changePage("about")}
          className="text-lg text-white hover:text-yellow-300"
          href="#"
        > */}
        <a
          onClick={() => props.changePage("about")}
          className="text-lg text-white hover:text-vang-khe"
          href="#"
        >
          {props.t.QACONTACT}
        </a>
        <div className="flex flex-row justify-center items-center">
          {flag.map((item, index) =>
            item.value === props.language ? (
              <span key={index}>{item.label}</span>
            ) : (
              <span key={index}></span>
            )
          )}
          <select
            name="language"
            id="language"
            className="min-w-fit bg-transparent text-white hover:cursor-pointer hover:text-vang-khe"
            onChange={(e) => props.setLanguage(e.target.value)}
            value={props.language}
          >
            {option.map((item, index) => (
              <option
                key={index}
                className="align-middle text-black"
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
