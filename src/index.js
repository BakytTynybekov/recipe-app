import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GeneralProvider } from "./context/GeneralContext";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <GeneralProvider>
        <App />
      </GeneralProvider>
    </Router>
  </StrictMode>,
  rootElement
);
