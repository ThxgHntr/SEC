interface Props {
  t: any;
}
const QA = (props: Props) => {
  return (
    <div className="w-full my-1 flex flex-col p-4 max-w-6xl text-xl">
      <table className="table-auto border-collapse border-spacing-4">
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
    </div>
  );
};

export default QA;
