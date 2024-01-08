import Image from "next/image";
import SelectL from "./selectL";

interface props {
  language: string;
  setLanguage(e: any): void;
  t: any;
}

const Header = (props: props) => {
  return (
    <div className="bg-xanh-le flex flex-col md:flex-row gap-10 lg:gap-0 justify-between p-4 items-center z-10 ">
      <div className="flex flex-row items-center gap-5 mx-5 mb-3 md:mb-0">
        <Image src="/logo.svg" alt="logo" width={60} height={60} />
        <p className="text-vang-khe text-xs lg:text-xl">SMILE EYES CHARITY</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 mx-5">
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
        <a href="#QA" className="text-lg pt-1 text-white hover:text-vang-khe">
          {props.t.QACONTACT}
        </a>
        <SelectL language={props.language} setLanguage={props.setLanguage} />
      </div>
    </div>
  );
};

export default Header;
