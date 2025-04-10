import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles.scss";
import { ActiveItemProvider } from "./pages/ActiveItemContext";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
  );
}
