import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Providers
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <main className="dark text-foreground bg-[#141414] h-screen font-Montserrat ">
      <App />
    </main>
  </NextUIProvider>
);
