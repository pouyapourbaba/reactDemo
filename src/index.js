import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

console.log("SUPERMAN", process.env.REACT_APP_NAME)

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
