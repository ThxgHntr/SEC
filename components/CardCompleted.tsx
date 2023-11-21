import { IoCalendarOutline } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";
import { IoHeartCircleSharp } from "react-icons/io5";
import { useState } from "react";

const CardCompleted = () => {
  const [numLike, setNumLike] = useState(256);
  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText("https://youtu.be/543jwFfCZvg")
        .then(() => alert("Link copied to clipboard"));
    } else {
      alert("Your browser does not support clipboard API");
    }
  };

  return (
    <div className="h-full shadow-lg border border-gray-200 bg-white rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="p-3">
          <p className="text-2xl font-bold">Project name</p>
          <div className="flex flex-row items-center justify-end gap-2">
            <IoCalendarOutline className="w-4 h-4" />
            <span>10/2023-10/2024</span>
          </div>
        </div>
        <iframe
          width="auto"
          height="400"
          src="https://www.youtube.com/embed/543jwFfCZvg?si=qPcHutduGIYha_68"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="flex flex-col content-start w-auto p-5 gap-3">
          <div>
            <p className="text-base">
              Description shdgajhd dáhjgda ádjgdjahs djasgdasjbd jasgd
              ádjasgdajs duiassgdasj
            </p>
          </div>
          <div className="flex flex-row-reverse w-full">
            <CiShare1 className=" w-6 h-6" />
          </div>
          <div className="flex flex-row justify-between">
            <a href="#">Details</a>
            <a href="#">Details</a>
            <div className="flex flex-row gap-2">
              <button onClick={() => setNumLike(numLike + 1)}>
                <IoHeartCircleSharp className="w-6 h-6 text-red-500" />
              </button>
              <span>{numLike}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span>Project:</span>
              <span>100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCompleted;
