import React, { useEffect, useState } from "react";
import Home from "../components/Home";
import "./App.css";
import "../Assets/animate.min.css";

function App() {
  const [theme] = useState<string>(localStorage.theme);
  useEffect(() => {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
