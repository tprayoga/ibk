import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Printer");

  const printReceipt = () => {
    window.print();
  };

  return (
    <div>
      <table className="print-receipt">
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
        </tbody>
      </table>

      <button className="hide-on-print" onClick={printReceipt}>
        Print
      </button>
    </div>
  );
};

export default App;
