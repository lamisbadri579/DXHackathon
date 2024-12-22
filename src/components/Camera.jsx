import { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);  // Track if models are loaded

  useEffect(() => {
    // Load the face-api.js models
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');
        console.log("Models loaded successfully!");
        setModelsLoaded(true);  // Set models loaded to true
      } catch (error) {
        console.error("Error loading models:", error);
        setModelsLoaded(false);
      }
    };

    // Start the webcam
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the camera: ", error);
      }
    };

    // Detect faces and draw expressions
    const detectFaces = async () => {
      if (videoRef.current && canvasRef.current && modelsLoaded) {
        try {
          const detections = await faceapi.detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions({ inputSize: 512, scoreThreshold: 0.5 })
          ).withFaceExpressions();

          console.log("Detections:", detections); // Log detections

          if (detections.length === 0) {
            console.log("No face detected");
          }

          const canvas = canvasRef.current;
          const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
          faceapi.matchDimensions(canvas, displaySize);
          const resizedDetections = faceapi.resizeResults(detections, displaySize);

          // Clear canvas using face-api.js draw method
          canvas.innerHTML = ''; // Clear previous drawings
          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
        } catch (error) {
          console.error("Error detecting faces:", error);
        }
      }
    };

    // Start the face detection process if models are loaded
    const startFaceDetection = async () => {
      await loadModels();
      if (modelsLoaded) {
        setInterval(detectFaces, 100);  // Run face detection every 100ms
      }
    };

    // Initialize camera and face detection
    startCamera();
    startFaceDetection();

    // Cleanup when component is unmounted
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const tracks = videoRef.current.srcObject.getTracks();


        tracks.forEach(track => track.stop());
      }
    };
  }, [modelsLoaded]);  // Add modelsLoaded to ensure face detection starts only after models are loaded

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Video feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-auto rounded-lg shadow-lg"
      />
      {/* Canvas for overlaying face detection */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full rounded-lg pointer-events-none"
      />
    </div>
  );
};

export default Camera;
