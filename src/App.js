import React, { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        // Menambahkan constraints width dan height untuk menghindari masalah hitam putih
        const constraints = {
          video: {
            facingMode: "environment", // Gunakan kamera belakang
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        alert("Gagal mengakses kamera: " + err.message);
      }
    };

    startCamera();
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      setPhoto(canvas.toDataURL("image/png"));
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#f8f8f8", minHeight: "100vh" }}>
      <h2>Test Autofokus Kamera</h2>

      <div style={{ position: "relative", display: "inline-block" }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          style={{
            width: "100%",
            maxWidth: "600px",
            border: "2px solid #333",
            borderRadius: "8px",
            transform: "scaleX(-1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            pointerEvents: "none",
          }}
        >
          {[...Array(9)].map((_, i) => (
            <div key={i} style={{ border: "1px solid rgba(255, 255, 255, 0.3)" }}></div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "15px" }}>
        <button
          onClick={handleCapture}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Capture Foto
        </button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>

      {photo && (
        <div style={{ marginTop: "20px" }}>
          <h3>Hasil Foto:</h3>
          <img src={photo} alt="Hasil" style={{ maxWidth: "600px", width: "100%", border: "1px solid #ccc", borderRadius: "8px", transform: "scaleX(-1)" }} />
        </div>
      )}
    </div>
  );
}

export default App;
