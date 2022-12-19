import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

import { GlobalStyles } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <CssBaseline />
    <GlobalStyles styles={{ body: { backgroundColor: "#1f1f2d" } }} />
    <App />
  </React.Fragment>
);
