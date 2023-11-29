import React, { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn, CiShare1 } from "react-icons/ci";
import { IoHeartCircleSharp } from "react-icons/io5";
import PdfModal from "./PdfModal";

interface Props {
  t: any;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Homepage = (props: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPdf, setCurrentPdf] = useState("");
  const linkCopy = "https://youtu.be/543jwFfCZvg";
  const [numLike, setNumLike] = useState(256);
  const [isCopied, setIsCopied] = useState(false);
  const copyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(linkCopy)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((error) => console.error("Copy failed:", error));
    } else {
      alert("Your browser does not support clipboard API");
    }
  };

  const openModalDetail = () => {
    setCurrentPdf(props.t.PROJECT_MAIN_LINK);
    setModalIsOpen(true);
  };

  const openModalPlan = () => {
    setCurrentPdf(props.t.PROJECT_PLAN_LINK);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
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
        <a href="#map">
          <div className="order-last">
            <CiLocationOn className="w-12 h-12" />
          </div>
        </a>
      </div>
      <div className="shadow-2xl bg-white rounded-lg mt-5 my-3">
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
            <div onClick={copyLink} className="flex flex-row-reverse w-full relative">
              <CiShare1 className=" w-6 h-6 hover:cursor-pointer" />
              {isCopied && (
                <div className="absolute bg-white p-2 rounded-lg border shadow-md bottom-8 left-auto">
                  <p className="text-green-500">Copied!</p>
                </div>
              )}
            </div>

            <div className="flex flex-row justify-between text-xl my-2">
              <p
                onClick={openModalDetail}
                className="font-bold underline hover:cursor-pointer"
              >
                {props.t.DETAILS}
              </p>
              <p
                onClick={openModalPlan}
                className="font-bold underline hover:cursor-pointer"
              >
                {props.t.PLAN}
              </p>
              <div className="flex flex-row gap-2">
                <button onClick={() => setNumLike(numLike + 1)}>
                  <IoHeartCircleSharp className="w-6 h-6 text-red-500" />
                </button>
                <span>{numLike}</span>
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
            <button
              onClick={() => props.setModalIsOpen(true)}
              className="bg-hong-bede rounded-lg p-2 font-bold hover:bg-hong-bede/[0.75]"
            >
              <div>{props.t.BUTTON_BE_THE_CONTRIBUTOR_OR_SPONSOR}</div>
            </button>
          </div>
        </div>
      </div>
      <PdfModal isOpen={modalIsOpen} onClose={closeModal} pdfSrc={currentPdf} />
    </div>
  );
};

export default Homepage;
