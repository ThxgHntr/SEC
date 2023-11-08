import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn, CiShare1 } from "react-icons/ci";
import { FcLike } from "react-icons/fc";

interface Props {
  t: any;
}

const Homepage = (props: Props) => {
  return (
    <div className="mx-auto p-2 w-full max-w-7xl">
      <p className="text-5xl font-bold text-center mb-3">
        {props.t.PROJECT_NAME}
      </p>
      <div className="flex justify-between">
        <div className="flex flex-row items-center justify-center order-first gap-2">
          <IoCalendarOutline className="w-10 h-10" />
          <span className="text-2xl">10/2023-10/2024</span>
        </div>
        <div className="order-last">
          <CiLocationOn className="w-12 h-12" />
        </div>
      </div>
      <div className="shadow-2xl border border-gray-200 bg-white rounded-lg mt-5 my-3">
        <div className="flex flex-row gap-3">
          <iframe
            className="w-10/12 rounded-l-lg"
            height="full"
            src={props.t.PROGRAM_SRC}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
          <div className="flex flex-col justify-between gap-4 p-4 w-7/12">
            <p className="text-2xl">{props.t.DESCRIPTION}</p>
            <div className="flex flex-row-reverse w-full">
              <CiShare1 className=" w-6 h-6" />
            </div>
            <div className="flex flex-row justify-between text-xl my-2">
              <a
                target="_blank"
                href={props.t.PROJECTMAINLINK}
                className="font-bold underline"
              >
                {props.t.DETAILS}
              </a>
              <a className="font-bold underline" href="#">
                {props.t.PLAN}
              </a>
              <div>
                <FcLike className="w-6 h-6" />
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <span>{props.t.PROGRESS}:</span>
                  <span>40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-vang-khe h-2.5 rounded-full"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
            <button className="bg-hong-bede rounded-lg p-2 font-bold hover:bg-hong-bede/[0.75]">
              <div>{props.t.BUTTON_BE_THE_CONTRIBUTOR_OR_SPONSOR}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
