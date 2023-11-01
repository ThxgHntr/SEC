import Image from "next/image";

const CardFounder = () => {
  return (
    <div className=" border border-gray-200 dark:border-gray-700 dark:bg-gray-800 max-w-fit rounded-lg shadow">
      <a
        href="#"
        className="flex flex-col items-center  bg-green-500  md:flex-row md:max-w-xl hover:bg-green-400  dark:hover:bg-gray-700"
      >
        <Image
          className="object-cover w-full rounded-full h-60 md:h-auto md:w-28 mx-2 my-2"
          width={0}
          height={0}
          src="https://i1.wp.com/www.digital38.com.vn/wp-content/uploads/2021/01/nhiep-anh-gia-chanh-nguyen.-1.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
};

export default CardFounder;
