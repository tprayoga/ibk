import React, { useEffect, useRef, useState } from "react";

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState("");
  const [photo, setPhoto] = useState(null);

  // Dapatkan daftar kamera setelah izin diberikan
  useEffect(() => {
    const getDevices = async () => {
      try {
        // Akses kamera satu kali untuk bisa ambil label
        await navigator.mediaDevices.getUserMedia({ video: true });

        const allDevices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = allDevices.filter((device) => device.kind === "videoinput");
        setDevices(videoDevices);

        if (videoDevices.length > 0) {
          setSelectedDeviceId(videoDevices[0].deviceId);
        }
      } catch (err) {
        alert("Gagal mengakses kamera: " + err.message);
      }
    };

    getDevices();
  }, []);

  // Stream video dari kamera terpilih
  useEffect(() => {
    const startStream = async () => {
      if (!selectedDeviceId) return;
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { deviceId: { exact: selectedDeviceId }, width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        alert("Gagal memulai kamera: " + err.message);
      }
    };

    startStream();
  }, [selectedDeviceId]);

  const handleCapture = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/png"));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Pilih Kamera</h2>

      {devices.length > 0 && (
        <select value={selectedDeviceId} onChange={(e) => setSelectedDeviceId(e.target.value)} style={{ marginBottom: "20px", padding: "10px" }}>
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || `Kamera ${device.deviceId.slice(-5)}`}
            </option>
          ))}
        </select>
      )}

      <div>
        <video ref={videoRef} autoPlay playsInline style={{ width: "100%", maxWidth: "600px", border: "1px solid black" }} />
      </div>

      <button onClick={handleCapture} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>
        Ambil Gambar
      </button>

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {photo && (
        <div style={{ marginTop: "20px" }}>
          <h3>Hasil Gambar</h3>
          <img src={photo} alt="Hasil" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
}

export default App;
