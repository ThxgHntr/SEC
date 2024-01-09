import React from "react";
import CardProgram from "./CardProgram";
interface Props {
  t: any;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Content = (props: Props) => {
  return (
    <div className="mx-auto p-2 w-full max-w-7xl" id="project">
      <p className="text-4xl font-bold text-center my-5 pt-10">
        {props.t.INCOMING_PROJECTS}
      </p>
      <hr className="max-w-4xl h-0.5 mx-auto my-4 bg-xanh-le border-0 rounded"></hr>
      <div className="flex flex-col md:flex-row justify-between m-3 gap-10">
        <div className="w-1/2">
          <CardProgram
            t={props.t}
            details={props.t.DETAILS}
            plan={props.t.PLAN}
            src={props.t.PROJECT1}
            text={props.t.PROJECT1_DETAILS}
            title={props.t.PROJECT1_NAME}
            link={props.t.PROJECT1_LINK}
            link_plan={props.t.PROJECT_PLAN_LINK}
            link_copy={props.t.PROJECT1_COPY}
            setModalIsOpen={props.setModalIsOpen}
            numLike={148}
          />
        </div>
        <div className="w-1/2">
          <CardProgram
            t={props.t}
            details={props.t.DETAILS}
            plan={props.t.PLAN}
            src={props.t.PROJECT2}
            text={props.t.PROJECT2_DETAILS}
            title={props.t.PROJECT2_NAME}
            link={props.t.PROJECT2_LINK}
            link_plan={props.t.PROJECT_PLAN_LINK}
            link_copy={props.t.PROJECT2_COPY}
            setModalIsOpen={props.setModalIsOpen}
            numLike={329}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
