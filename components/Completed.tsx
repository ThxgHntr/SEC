import CardCompleted from "./CardCompleted";
import CardMore from "./CardMore";

const Completed = () => {
  return (
    <div className="mx-auto my-0 w-full max-w-7xl z-0">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">
        Completed Projects
      </h1>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded md:my-10"></hr>
      <div className="flex flex-row justify-center gap-3 mx-3">
        <div className="max-w-xl w-full h-full shadow-lg border border-gray-200 bg-white rounded-lg">
          <CardCompleted />
        </div>

        <div className="flex flex-col gap-4 p-5 max-w-lg w-full shadow-lg border border-gray-200 bg-xanh-dam rounded-lg">
          <span className="text-xl font-bold text-white">More</span>
          <CardMore />
          <CardMore />
          <CardMore />
        </div>
      </div>
    </div>
  );
};

export default Completed;
