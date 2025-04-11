import React, { useRef } from "react";
import "./App.css";

function App() {
  const notaRef = useRef();

  const handlePrint = () => {
    const printContent = notaRef.current;
    const WinPrint = window.open("", "", "width=500,height=600");
    WinPrint.document.write(`
      <html>
        <head>
          <title>Nota</title>
          <style>
            body {
              font-family: monospace;
              padding: 10px;
              font-size: 12px;
            }
            .nota {
              white-space: pre;
            }
          </style>
        </head>
        <body onload="window.print(); window.close();">
          ${printContent.innerHTML}
        </body>
      </html>
    `);
    WinPrint.document.close();
  };

  return (
    <div className="App">
      <h1>Test Print Nota</h1>
      <div ref={notaRef} className="nota" style={{ display: "none" }}>
        <div> TOKO MAKMUR JAYA</div>
        <div> Jl. Kebon Jeruk No.12</div>
        <div>--------------------------------</div>
        <div>1x Nasi Goreng 15.000</div>
        <div>2x Teh Manis 10.000</div>
        <div>--------------------------------</div>
        <div>Total: 25.000</div>
        <div>Bayar: 30.000</div>
        <div>Kembali: 5.000</div>
        <div>--------------------------------</div>
        <div> Terima Kasih!</div>
        <div> 11-04-2025 14:32:11</div>
      </div>
      <button onClick={handlePrint}>Print Nota</button>
    </div>
  );
}

export default App;
