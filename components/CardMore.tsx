import image from "../public/image.png";
import Image from 'next/image';

const CardMore = () => {
  return (
    <div className="shadow-lg bg-white flex flex-row w-full h-full rounded-lg ">
      <div className="relative overflow-hidden object-cover w-full rounded-l-lg h-full">
        <Image src={image} alt="image" fill/>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default CardMore;
