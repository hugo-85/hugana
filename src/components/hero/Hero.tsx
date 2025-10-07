import type { FC } from "react";
import styles from "./hero.module.css";

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLogoContainer}>
        <img
          src="/imgs/hugana_logo.webp"
          alt="hugana_logo"
          className={styles.heroLogo}
        />
      </div>
      <div className={styles.heroTitleContainer}>
        <h1 className={styles.heroTitle}>HUGANA</h1>
        <h2>Empresa especializada en buceo profesional</h2>
      </div>
    </section>
  );
};

export default Hero;

/*
Somos una empresa especializada en buceo profesional con amplia
          trayectoria en operaciones submarinas complejas, orientadas a brindar
          soluciones integrales en ambientes subacuáticos. Nos dedicamos a
          salvataje, inspección, mantenimiento y reparación de estructuras e
          instalaciones sumergidas, tanto en entornos marítimos como fluviales e
          industriales. Contamos con un equipo de buzos altamente capacitados y
          certificados, equipados con tecnología de vanguardia que nos permite
          ejecutar tareas críticas con precisión, seguridad y eficiencia.
          Nuestros servicios incluyen desde cortes y soldaduras subacuáticas,
          recuperación de objetos, inspecciones visuales o con cámaras ROV,
          hasta instalación de sistemas hidráulicos, protección catódica y
          limpieza técnica de infraestructuras portuarias, embarcaciones,
          represas y plataformas. Nuestra prioridad es garantizar resultados
          confiables en condiciones extremas, optimizando el tiempo de
          intervención y minimizando el impacto operativo para nuestros
          clientes. Trabajamos bajo estrictas normas de seguridad y calidad,
          comprometidos con la excelencia técnica y la mejora continua en cada
          proyecto.
*/
