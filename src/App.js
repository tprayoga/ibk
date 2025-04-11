import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Printer");

  const printReceipt = () => {
    window.print();
  };

  return (
    <div
  style={{
    fontFamily: 'monospace',
    fontSize: '4px',
    fontWeight: 'bold',
    whiteSpace: 'pre',
    lineHeight: '1.4',
  }}
>
  <div style={{ textAlign: 'center' }}>
    TOKO MAKMUR JAYA
    <br />
    Jl. Kebon Jeruk No.12
    <br />
    --------------------------------
  </div>

  <div>
    Nasi Goreng           x1   15.000
    <br />
    Teh Manis             x2   10.000
    <br />
    --------------------------------
    <br />
    Total:                     25.000
    <br />
    Bayar:                     30.000
    <br />
    Kembali:                   5.000
    <br />
    --------------------------------
  </div>

  <div style={{ textAlign: 'center' }}>
    Terima Kasih!
    <br />
    11-04-2025 14:32:11
  </div>

  <button
    onClick={printReceipt}
    style={{
      marginTop: '10px',
      padding: '6px 12px',
      fontSize: '12px',
      cursor: 'pointer',
      fontWeight: 'bold',
      display: 'block',
    }}
  >
    Print
  </button>
</div>

  );
};

export default App;
