import React from "react";
import ReactDOM from "react-dom/client";
import "material-icons/iconfont/material-icons.css";
import "./colors.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <h1>Lib A-All</h1>
  </React.StrictMode>
);

export * from "./a-all";
