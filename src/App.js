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
      fontWeight: 'bold',
    }}
  >
    <thead>
      <tr>
        <th style={{ border: '1px solid #000', padding: '2px' }}>Item</th>
        <th style={{ border: '1px solid #000', padding: '2px' }}>Qty</th>
        <th style={{ border: '1px solid #000', padding: '2px' }}>Harga</th>
        <th style={{ border: '1px solid #000', padding: '2px' }}>Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Nasi Goreng</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>1</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>15.000</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>15.000</td>
      </tr>
      <tr>
        <td style={{ border: '1px solid #000', padding: '2px' }}>Teh Manis</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>2</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>5.000</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>10.000</td>
      </tr>
      <tr>
        <td colSpan="3" style={{ border: '1px solid #000', padding: '2px' }}>Total</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>25.000</td>
      </tr>
      <tr>
        <td colSpan="3" style={{ border: '1px solid #000', padding: '2px' }}>Bayar</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>30.000</td>
      </tr>
      <tr>
        <td colSpan="3" style={{ border: '1px solid #000', padding: '2px' }}>Kembali</td>
        <td style={{ border: '1px solid #000', padding: '2px' }}>5.000</td>
      </tr>
    </tbody>
  </table>

  <div
    style={{
      fontSize: '9px',
      fontFamily: 'monospace',
      fontWeight: 'bold',
      marginTop: '10px',
      textAlign: 'center',
    }}
  >
    <div>Terima Kasih Telah Berbelanja!</div>
    <div>11-04-2025 14:32:11</div>
  </div>

  <button
    onClick={printReceipt}
    style={{
      marginTop: '10px',
      padding: '6px 12px',
      fontSize: '12px',
      cursor: 'pointer',
      fontWeight: 'bold',
    }}
  >
    Print
  </button>
</div>


  );
};

export default App;
