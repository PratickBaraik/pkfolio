import { BrowserRouter } from "react-router-dom";

import Router from "./router";
import ScrollRestoration from "./scrollRestoration";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Router />
    </BrowserRouter>
  );
}
