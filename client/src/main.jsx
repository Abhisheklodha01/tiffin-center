import React, { createContext} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AppWrapper from "./AppWraper";

export const Context = createContext({ isAuthenticated: false });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <AppWrapper />
    <Toaster />
  </div>
);
