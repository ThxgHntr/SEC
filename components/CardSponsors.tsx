import Image from "next/image";
import Url from "../public/founder.jpg";

const CardSponsors = () => {
  return (
    <div className="flex-col items-center w-80 flex max-w-fit rounded-lg shadow-lg bg-white md:max-w-xl">
      {/* <a
        href="#"
        className="flex flex-col items-center  bg-white  md:flex-row md:max-w-xl hover:bg-gray-100  dark:hover:bg-gray-700"
      > */}
      <Image
        className="object-cover w-full h-96 rounded-t-lg"
        width={0}
        height={0}
        src={Url}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
      {/* </a> */}
    </div>
  );
};

export default CardSponsors;
