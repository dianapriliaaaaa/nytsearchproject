import { AnimatePresence } from 'framer-motion';
import React from "react";
import Home from "./components/Home";
import "./css/App.css";

function App() {
  return (
    <AnimatePresence>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-primary-dark transition">
          <Home />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default App;
