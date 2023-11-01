import { IoCalendarOutline } from "react-icons/io5";
import { CiShare1 } from "react-icons/ci";

const CardProgram = () => {
  return (
    <div className="shadow-lg border border-gray-200 bg-white rounded-lg mt-5 my-3">
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
          height="315"
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
            <a href="#">Details</a>
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
            <button className="bg-hong-bede rounded-lg p-2 font-bold hover:bg-hong-bede/[0.75]">
              Be a contributor OR SPONSOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProgram;
