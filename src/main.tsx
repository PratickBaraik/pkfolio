import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "@/index.css";

import { handleChunkError } from "./utils/chunkReload";

handleChunkError();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
