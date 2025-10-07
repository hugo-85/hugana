import type { FC } from "react";
import type { skillType } from "../../types/skills";
import Skill from "../skill/Skill";
import appStyles from "../../app.module.css";

const skillsList: skillType[] = [
  {
    title: "Solución de Buceo Submarino",
    description:
      "Contamos con una amplia trayectoria en operaciones submarinas complejas, brindando soluciones integrales y personalizadas en ambientes subacuáticos. Nuestro equipo de buzos profesionales está capacitado para enfrentar desafíos técnicos y de seguridad, garantizando resultados óptimos en inspección, reparación, mantenimiento y rescate bajo el agua.",
    imageUrl: "/imgs/welding.jpg",
  },
  {
    title: "Limpieza Técnica de Infraestructuras",
    description:
      "Realizamos limpieza técnica especializada de infraestructuras portuarias, embarcaciones, represas y plataformas, utilizando tecnología de vanguardia y procedimientos certificados. Nuestro servicio asegura la remoción eficiente de incrustaciones, sedimentos y contaminantes, prolongando la vida útil de las instalaciones y optimizando su funcionamiento.",
    imageUrl: "/imgs/dam.webp",
  },
  {
    title: "Construcción de Infraestructura Submarina",
    description:
      "Desarrollamos proyectos de construcción de infraestructura submarina en entornos desafiantes, adaptándonos a las necesidades de cada cliente. Nuestra experiencia abarca desde la instalación de pilotes y estructuras hasta la ejecución de obras civiles bajo el agua, cumpliendo con los más altos estándares de calidad y seguridad.",
    imageUrl: "/imgs/pillars.jpg",
  },
];

const Skills: FC = () => {
  return (
    <section className={appStyles.sectionContainer}>
      <div className={appStyles.sectionTitleContainer}>
        <h2 className={appStyles.sectionTitle}>Servicios</h2>
      </div>
      {skillsList.map((skill, index) => (
        <Skill key={index} skill={skill} />
      ))}
    </section>
  );
};

export default Skills;
