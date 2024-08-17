import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <GoogleOAuthProvider clientId={"878036846411-t3305i1ulmpr26e1dfdvof7esr5gbfbl.apps.googleusercontent.com"}></GoogleOAuthProvider>
    <App />
  </StrictMode>
);
