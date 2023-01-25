import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
import { ContextProvider } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
