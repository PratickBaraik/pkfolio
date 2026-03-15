import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudioProvider } from "../context/AudioContext";

import HomePage from "../pages/home/Home";
import Works from "../pages/work/Work";
import Contact from "../pages/contact/Contact";
import GearList from "../pages/gearlist/Gearlist";
import About from "../pages/about/About";
import Project from "../pages/project/Project";

// import Gearlist from "@/features/gearlist/Gearlist";

/*
App component

Responsibilities
- Global providers
- Router configuration
*/

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gearlist" element={<GearList />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}
