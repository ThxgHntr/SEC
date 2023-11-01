import React from "react";
import CardProgram from "./CardProgram";
interface Props {
  t: any;
}

const Content = (props: Props) => {
  return (
    <div className="mx-auto my-0 w-full max-w-5xl" id="project">
      <p className="text-4xl font-bold text-center my-5 pt-10">
        {props.t.INCOMING_PROJECTS}
      </p>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded md:my-10"></hr>
      <div className="flex flex-row justify-between mx-3 my-3 gap-5">
        <CardProgram t={props.t} src={props.t.PROJECT1} text={props.t.PROJECT1_DETAILS} />
        <CardProgram t={props.t} src={props.t.PROJECT2} text={props.t.PROJECT2_DETAILS}/>
      </div>
    </div>
  );
};

export default Content;
