const CardSponsors = () => {
  return (
    <div className=" border flex-col items-center w-80 flex border-gray-200 dark:border-gray-700 dark:bg-gray-800 max-w-fit rounded-lg shadow bg-white md:max-w-xl hover:bg-gray-100  dark:hover:bg-gray-700">
      {/* <a
        href="#"
        className="flex flex-col items-center  bg-white  md:flex-row md:max-w-xl hover:bg-gray-100  dark:hover:bg-gray-700"
      > */}
      <img
        className="object-cover w-full rounded-full h-60 md:h-auto md:w-28 mx-2 my-2"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
        alt=""
        loading="lazy"
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
      {/* </a> */}
    </div>
  );
};

export default CardSponsors;
