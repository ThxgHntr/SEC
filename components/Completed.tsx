import CardCompleted from "./CardCompleted";
import CardMore from "./CardMore";

interface Props {
  t: any;
}

const Completed = (props: Props) => {
  return (
    <div className="mx-auto p-2 w-full max-w-7xl z-0">
      <h1 className="text-4xl font-bold text-center my-5 pt-10">
        {props.t.COMPLETED_PROJECTS}
      </h1>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <div className="flex flex-col lg:flex-row justify-between m-3 gap-10">
        <div className="w-full h-full shadow-lg bg-white rounded-lg">
          <CardCompleted t={props.t} />
        </div>

        <div className="flex flex-col gap-4 p-5 shadow-lg bg-xanh-dam rounded-lg">
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
