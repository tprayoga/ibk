import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("Printer");

  const printReceipt = () => {
    window.print();
  };

  return (
    <div>
      <div
        style={{
          fontFamily: "monospace",
          fontSize: "8px",
          fontWeight: "bold",
          whiteSpace: "pre",
          lineHeight: 1.4,
        }}
      >
        <div>
          BADAN PENDAPATAN DAERAH
          <br />
          PPPD NO HATTA NO. 528 BANDUNG
          <br />
          NOTA PERHITUNGAN PAJAK KENDARAAN BERMOTOR (NPPKB)
          <br />
          ----------------------------------------
        </div>
        Ket : DUMMY_KODE - DUMMY_LAYANAN
        <br />
        Milik Ke : DUMMY_MILIK : DUMMY_TARIF
        <br />
        NO.POLISI : AB 123 CD [DUMMY_PLAT] - DUMMY_WILAYAH
        <br />
        NAMA : DUMMY_NAME [123456789]
        <br />
        ALAMAT : DUMMY_ADDRESS
        <br />
        KELURAHAN : DUMMY_KELURAHAN
        <br />
        KECAMATAN : DUMMY_KECAMATAN
        <br />
        MS. PAJAK : 12-1-2012 - 12-1-2012
        <br />
        TGL AKHIR PAJAK LAMA: 12-1-2012
        <br />
        TGL AKHIR STNK : 12-1-2012
        <br />
        MRK/TYPE : DUMMY_MEREK / DUMMY_MODEL / [BBM]
        <br />
        JNS/KD_MRK : DUMMY_JENIS / [123] / 2021
        <br />
        RANGKA/MSN : [R123] / [M123]
        <br />
        CC/WRN/KFS : [150 CC] / [RED] / (FUNCTION)
        <br />
        NJKB/BBT : Rp. 10,000,000 / 1200
        <br />
        KETERANGAN 1 : DUMMY_KET1
        <br />
        KETERANGAN 2 : DUMMY_KET2
        <br />
        KETERANGAN 3 : DUMMY_KET3
        <br />
        KODE VOUCHER : VOUCHER_123
        <br />
        ----------------------------------------
        <br />
        DGN RINCIAN SBB :
        <br />
        BBNKB I : 1,000,000 | Denda: 50,000 | Opsen: 10,000
        <br />
        BBNKB II : 2,000,000 | Denda: 100,000 | Opsen: 20,000
        <br />
        PKB Pokok : 3,000,000 | Denda: 150,000 | Opsen: 30,000
        <br />
        PKB Tunggakan 1 : 500,000 | Denda: 25,000 | Opsen: 5,000
        <br />
        PKB Tunggakan 2 : 600,000 | Denda: 30,000 | Opsen: 6,000
        <br />
        PKB Tunggakan 3 : 700,000 | Denda: 35,000 | Opsen: 7,000
        <br />
        PKB Tunggakan 4 : 800,000 | Denda: 40,000 | Opsen: 8,000
        <br />
        PKB Tunggakan 5 : 900,000 | Denda: 45,000 | Opsen: 9,000
        <br />
        SWDKLLJ : 100,000 | Denda: 5,000 | Opsen: 1,000
        <br />
        SWDKLLJ Tunggakan : 50,000 | Denda: 2,500 | Opsen: 500
        <br />
        BEA ADM STNK : 75,000
        <br />
        BEA ADM TNKB : 80,000
        <br />
        ----------------------------------------
        <br />
        JUMLAH : Pokok: 10,000,000 | Denda: 500,000 | Opsen: 100,000
        <br />
        TOTAL : Rp. 10,500,000
        <br />
        ----------------------------------------
        <br />
        DITETAPKAN DI : DUMMY_PLACE, DATE
        <br />
        PETUGAS PENETAPAN : DUMMY_OFFICER
      </div>

      <button
        onClick={printReceipt}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          fontSize: "12px",
          cursor: "pointer",
          fontWeight: "bold",
          display: "block",
        }}
      >
        Print
      </button>
    </div>
  );
};

export default App;
