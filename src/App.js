import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Printer");

  const printReceipt = () => {
    window.print();
  };

  return (
<div>
  <table
    style={{
      fontSize: '9px',
      fontFamily: 'monospace',
      width: '100%',
      borderCollapse: 'collapse',
    }}
  >
    <thead>
      <tr>
        <th style={{ border: '1px solid #000', padding: '2px', textAlign: 'left' }}>
          Company
        </th>
        <th style={{ border: '1px solid #000', padding: '2px', textAlign: 'left' }}>
          Contact
        </th>
        <th style={{ border: '1px solid #000', padding: '2px', textAlign: 'left' }}>
          Country
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Alfreds Futterkiste</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Maria Anders</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Germany</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Centro comercial Moctezuma</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Francisco Chang</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Mexico</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Ernst Handel</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Roland Mendel</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Austria</td>
      </tr>
    </tbody>
  </table>

  <button
    onClick={printReceipt}
    style={{
      marginTop: '10px',
      padding: '6px 12px',
      fontSize: '12px',
      cursor: 'pointer',
    }}
  >
    Print
  </button>
</div>

  );
};

export default App;
