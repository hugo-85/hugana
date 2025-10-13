import { useEffect, useState } from "react";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import styles from "./app.module.css";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

function App() {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setBackgroundLoaded(true);
      console.log("Background image loaded!");
    };
    img.onerror = () => {
      console.error("Failed to load background image");
    };
    img.src = "imgs/main_background.webp";
  }, []);

  return (
    <>
      <main
        className={
          backgroundLoaded
            ? styles.mainBackgroundImage
            : styles.mainBackgroundImagePlaceholder
        }
      >
        <Hero />
        <Skills />
        <Projects />
        <Footer />
        <img
          src="imgs/background_footer.webp"
          className={styles.footerBackground}
        />
      </main>
    </>
  );
}

export default App;
