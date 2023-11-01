import CardFounder from "./CardFounder";
import CardSponsors from "./CardSponsors";
import Image from "next/image";

const Contributors = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-7xl">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">
        Contributors
      </h1>
      <hr className="max-w-4xl h-1 mx-auto my-4 bg-green-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <h1 className="text-4xl font-bold text-start my-5 pt-10">VOLUNTEERS</h1>
      <div className="flex flex-row gap-2 mx-3 my-3">
        <CardFounder />
        <CardFounder />
        <CardFounder />
      </div>
      <div className="flex flex-row gap-2 mx-3 my-3">
        <CardFounder />
        <CardFounder />
        <CardFounder />
      </div>
      <h1 className="text-4xl font-bold text-start my-5 pt-10" id="sponsors">
        SPONSORS
      </h1>
      <div className="flex flex-row gap-2 mx-3 my-3">
        <CardSponsors />
        <CardSponsors />
        <CardSponsors />
        <CardSponsors />
      </div>
      <h1 className="text-4xl font-bold text-start my-5 pt-10">FOUNDER</h1>
      <div className="my-3 py-3">
        <div className=" border border-gray-200 dark:border-gray-700 dark:bg-gray-800 max-w-full rounded-lg shadow">
          <a
            href="#"
            className="flex flex-col items-center  bg-emerald-600  md:flex-row md:max-w-full hover:bg-green-600 rounded-lg dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-full h-96 md:h-auto md:w-60 mx-2 my-2"
              width={0}
              height={0}
              src="https://i1.wp.com/www.digital38.com.vn/wp-content/uploads/2021/01/nhiep-anh-gia-chanh-nguyen.-1.jpg"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h2 className="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white my-3">
                Noteworthy technology acquisitions 2021
              </h2>
              <p className="mb-3 font-normal text-white dark:text-gray-400 my-2">
                email@example.com
              </p>
              <p className="mb-3 font-normal text-white dark:text-gray-400 my-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
