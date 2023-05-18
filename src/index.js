/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 */


import React from "react";
/* import ReactDOM from "react-dom"; */
import ReactDOM from 'react-dom/client';

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import "./index.css";
/* import { Image } from "@mui/icons-material"; */
import { Alert, CircularProgress, Grid, LinearProgress, Typography } from "@mui/material";
import App from "./App";

const App2 = () => {

  const videoRef = React.useRef();
  const canvasRef = React.useRef();
  const canvasPhotoRef = React.useRef();
  const nPhotosRef = React.useRef(0);
  const imagesRef = React.useRef();
  const [loading, setLoading] = React.useState(true);
  const [loadingDetected, setLoadingDetected] = React.useState(true);


  React.useEffect(() => {

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const webCamPromise = navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "user"
          }
        })
        .then(stream => {
          window.stream = stream;
          videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            videoRef.current.onloadedmetadata = () => {
              resolve();
            };
          });
        });
      const modelPromise = cocoSsd.load();
      Promise.all([modelPromise, webCamPromise])
        .then(values => {
          detectFrame(videoRef.current, values[0]);
        })
        .catch(error => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }, []);


  const detectFrame = (video, model) => {
    model.detect(video).then(predictions => {
      renderPredictions(predictions);
      requestAnimationFrame(() => {
        detectFrame(video, model);
      });
    });
  };

  const renderPredictions = predictions => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    predictions.forEach(prediction => {

      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

      if (["car", "Car"].includes(prediction.class)) {

        const ctxPhoto = canvasPhotoRef.current.getContext("2d");
        ctxPhoto.drawImage(videoRef.current, 0, 0, ctxPhoto.canvas.width, ctxPhoto.canvas.height);

        const capturePhoto = function () {

          if (nPhotosRef.current < 5) {

            const image = new Image();
            image.src = ctxPhoto.canvas.toDataURL("image/png");
            image.onload = function () {
              imagesRef.current.appendChild(this);
            }

            setTimeout(capturePhoto.bind(), 100);
            setLoadingDetected(false);
            nPhotosRef.current += 1;

            setTimeout(() => {
              imagesRef.current.innerHTML = "";
              nPhotosRef.current = 0;

              setLoadingDetected(true);
            }, 5000);
          }

        };

        capturePhoto();
      }

      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];

      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  };


  return (
    <Grid container spacing={3}>
      {loading && (
        <Grid item xs={12}>
          <Typography variant="h4" component="div" color="primary">
            Loading...
          </Typography>
        </Grid>
      )}
      <Grid item xs={8} md={6} lg={7}>
        <div>
          <video
            className="size"
            autoPlay
            playsInline
            muted
            ref={videoRef}
            width="600"
            height="400"
          />
          <canvas
            className="size"
            ref={canvasRef}
            width="600"
            height="400"
          />
        </div>
      </Grid>
      <Grid item xs={4} md={6} lg={5}>
        {(!loading && loadingDetected) && <Alert severity="info">The camera is detecting a vehicle!</Alert>}
        <canvas
          style={{ display: "none" }}
          ref={canvasPhotoRef}
          width="450"
          height="200"
        />

        <div ref={imagesRef} />

      </Grid>
    </Grid>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />);