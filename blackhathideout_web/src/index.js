import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { VisionUIControllerProvider } from "context";


const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <VisionUIControllerProvider>
      <App />
    </VisionUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);