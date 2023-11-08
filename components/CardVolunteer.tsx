import Image from "next/image";
import Url from "../public/founder.jpg";

const CardVolunteer = () => {
  return (
    <div className="flex flex-row border-gray-200  max-w-fit rounded-lg shadow-lg">
      <Image
        className="object-cover rounded-l-lg"
        style={{ objectFit: "cover", width: "30%", height: "100%" }}
        src={Url}
        alt=""
      />
      <div className="flex flex-col gap-2 m-2 justify-between leading-normal">
        <p className="text-2xl font-bold tracking-tight">
          Noteworthy technology acquisitions 2021
        </p>
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
};

export default CardVolunteer;
