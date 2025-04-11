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
      <h1>Test Print Nota</h1>
      <div  className="print-receipt" >
        <div>       TOKO MAKMUR JAYA</div>
        <div>     Jl. Kebon Jeruk No.12</div>
        <div>--------------------------------</div>
        <div>1x Nasi Goreng         15.000</div>
        <div>2x Teh Manis           10.000</div>
        <div>--------------------------------</div>
        <div>Total:                25.000</div>
        <div>Bayar:                30.000</div>
        <div>Kembali:               5.000</div>
        <div>--------------------------------</div>
        <div>     Terima Kasih!</div>
        <div>  11-04-2025 14:32:11</div>
      </div>

      <button className="hide-on-print" onClick={printReceipt}>
        Print
      </button>
    </div>
  );
};

export default App;
