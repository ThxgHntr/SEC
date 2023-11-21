import { IoCalendarOutline } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import { useState } from "react";
import { IoHeartCircleSharp } from "react-icons/io5";

interface Props {
  t: any;
  src: any;
  text: String;
  title?: String;
  link: any;
  link_plan?: any;
  numLike: number;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardProgram = (props: Props) => {
  const [numLike, setNumLike] = useState(props.numLike);
  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(props.src)
        .then(() => alert("Link copied to clipboard"));
    } else {
      alert("Your browser does not support clipboard API");
    }
  };
  return (
    <div className="shadow-lg bg-white rounded-lg mt-5 my-3">
      <div className="flex flex-col gap-2">
        <div className="p-3">
          <p className="text-2xl font-bold">{props.title}</p>
          <div className="flex flex-row items-center justify-end gap-2">
            <IoCalendarOutline className="w-4 h-4" />
            <span>10/2023-10/2024</span>
          </div>
        </div>
        <iframe
          width="auto"
          height="315"
          src={props.src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="flex flex-col content-start w-auto p-5 gap-3">
          <div>
            <p className="text-base">{props.text?.slice(0, 150) + "..."}</p>
          </div>
          <div onClick={copyLink} className="flex flex-row-reverse w-full">
            <CiShare1 className=" w-6 h-6" />
          </div>
          <div className="flex flex-row justify-between">
            <a className="underline" target="_blank" href={props.link}>
              {props.t.DETAILS}
            </a>
            <a target="_blank" href={props.link_plan} className="underline">
              {props.t.PLAN}
            </a>
            <div className="flex flex-row gap-2">
              <button onClick={() => setNumLike(numLike + 1)}>
                <IoHeartCircleSharp className="w-6 h-6 text-red-500" />
              </button>
              <span>{numLike}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Project:</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-vang-khe h-2.5 rounded-full"
                  style={{ width: "40%" }}
                />
              </div>
            </div>
            <button
              onClick={() => props.setModalIsOpen(true)}
              className="bg-hong-bede rounded-lg p-2 font-bold hover:bg-hong-bede/[0.75]"
            >
              {props.t.BUTTON_BE_THE_CONTRIBUTOR_OR_SPONSOR}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProgram;
