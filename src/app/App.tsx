import { BrowserRouter } from "react-router-dom";
import { AudioProvider } from "../context/AudioContext";

import Router from "./router";

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AudioProvider>
  );
}
