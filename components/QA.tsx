interface Props {
  t: any;
}
const QA = (props: Props) => {
  return (
    <div className="w-full my-1 flex flex-col p-4 max-w-6xl text-xl">
      <table className="table-auto border-collapse md:border-collapse-2 hidden md:block">
        <thead>
          <tr>
            <th className="p-4 border border-xanh-dam">STT</th>
            <th className="p-4 border border-xanh-dam">Q</th>
            <th className="p-4 border border-xanh-dam">A</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border border-xanh-dam">1</td>
            <td className="p-4 border border-xanh-dam">{props.t.Q1}</td>
            <td className="p-4 border border-xanh-dam">
              <p>{props.t.A1}</p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-xanh-dam">2</td>
            <td className="p-4 border border-xanh-dam">{props.t.Q2}</td>
            <td className="p-4 border border-xanh-dam">
              <p>{props.t.A2}</p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-xanh-dam">3</td>
            <td className="p-4 border border-xanh-dam">{props.t.Q3}</td>
            <td className="p-4 border border-xanh-dam">
              <p>{props.t.A3}</p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-xanh-dam">4</td>
            <td className="p-4 border border-xanh-dam">{props.t.Q4}</td>
            <td className="p-4 border border-xanh-dam">
              <p>{props.t.A4}</p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border border-xanh-dam">5</td>
            <td className="p-4 border border-xanh-dam">{props.t.Q5}</td>
            <td className="p-4 border border-xanh-dam">
              <p>{props.t.A5}</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col md:hidden">
        <div>
          <span className="font-bold">Q1:</span> {props.t.Q1}
        </div>
        <div>
          <span className="font-bold">A1:</span> {props.t.A1}
        </div>
        <hr className="h-0.5 mx-auto my-4 border-0 "></hr>
        <div>
          <span className="font-bold">Q2:</span> {props.t.Q2}
        </div>
        <div>
          <span className="font-bold">A2:</span> {props.t.A2}
        </div>
        <hr className="h-0.5 mx-auto my-4 border-0 "></hr>
        <div>
          <span className="font-bold">Q3:</span> {props.t.Q3}
        </div>
        <div>
          <span className="font-bold">A3:</span> {props.t.A3}
        </div>
        <hr className="h-0.5 mx-auto my-4 border-0 "></hr>
        <div>
          <span className="font-bold">Q4:</span> {props.t.Q4}
        </div>
        <div>
          <span className="font-bold">A4:</span> {props.t.A4}
        </div>
        <hr className="h-0.5 mx-auto my-4 border-0 "></hr>
        <div>
          <span className="font-bold">Q5:</span> {props.t.Q5}
        </div>
        <div>
          <span className="font-bold">A5:</span> {props.t.A5}
        </div>
      </div>
    </div>
  );
};

export default QA;
