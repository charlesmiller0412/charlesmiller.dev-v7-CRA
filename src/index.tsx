import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/output.css";
import App from "./App";
import "animate.css/animate.min.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.Fragment>
        <App />
    </React.Fragment>
);
