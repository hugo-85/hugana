import { useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Hero />
        <Skills />
      </main>
    </>
  );
}

export default App;
