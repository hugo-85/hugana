import type { FC } from "react";
import appStyles from "../../app.module.css";
import type { TProject } from "../../types/projects";
import Project from "../project/Project";

const projectsList: TProject[] = [
  {
    title: "Reparación del Puerto de Santa Cruz",
    description:
      "Proyecto de mantenimiento y reparación de infraestructura portuaria sumergida en el Puerto de Santa Cruz. Incluye la inspección subacuática de pilotes, muelles y estructuras de hormigón, reparación de daños por corrosión marina, soldadura subacuática de elementos metálicos deteriorados, y limpieza de incrustaciones marinas. El proyecto garantizó la seguridad operacional del puerto y extendió la vida útil de las instalaciones portuarias por 15 años adicionales.",
    imageUrl: "/imgs/projects/project_1.webp",
  },
  {
    title: "Inspección de Cascos de Buques Comerciales",
    description:
      "Servicio especializado de inspección subacuática de cascos de embarcaciones comerciales y pesqueras. Realizamos evaluaciones técnicas detalladas del estado del casco, detección de grietas, corrosión, daños por impacto y verificación del sistema de protección catódica. Utilizamos técnicas de ultrasonido subacuático y fotografía de alta resolución para documentar el estado estructural. Este servicio permite a las navieras mantener sus certificaciones de navegabilidad y prevenir costosas reparaciones mayores.",
    imageUrl: "/imgs/projects/project_2.webp",
  },
  {
    title: "Soldadura Subacuática en Plataforma Petrolera",
    description:
      "Proyecto crítico de soldadura subacuática para reparación de estructuras en plataforma petrolera offshore. El trabajo incluyó la reparación de fracturas en las patas de soporte de la plataforma a 45 metros de profundidad, utilizando técnicas de soldadura húmeda y seca. Se implementaron protocolos de seguridad extremos debido al entorno de hidrocarburos. La intervención exitosa evitó el costoso desmantelamiento de la plataforma y garantizó la continuidad operacional de la extracción petrolera.",
    imageUrl: "/imgs/projects/project_3.webp",
  },
  {
    title: "Limpieza de Hélices y Sistemas de Propulsión",
    description:
      "Servicio integral de mantenimiento subacuático de sistemas de propulsión naval. Realizamos limpieza profunda de hélices, remoción de redes y cabos enredados, pulido de palas para optimizar la eficiencia hidrodinámica, e inspección de sellos y cojinetes. También incluye la limpieza de tomas de agua de mar y sistemas de refrigeración. Este mantenimiento preventivo mejora significativamente el rendimiento del combustible y reduce las vibraciones, extendiendo la vida útil del sistema propulsor.",
    imageUrl: "/imgs/projects/project_4.webp",
  },
  {
    title: "Recuperación de Anclas y Objetos Perdidos",
    description:
      "Operaciones especializadas de búsqueda y recuperación de anclas, cadenas y equipos perdidos en el fondo marino. Utilizamos sonar de barrido lateral, detectores de metales subacuáticos y técnicas de elevación con globos de flotación controlada. El proyecto más notable incluyó la recuperación de un ancla de 15 toneladas perdida a 60 metros de profundidad en el Estrecho de Magallanes. Nuestro equipo especializado en aguas frías logró la recuperación exitosa utilizando trajes de buceo con calefacción y mezclas respiratorias especiales.",
    imageUrl: "/imgs/projects/project_5.webp",
  },
];

const Projects: FC = () => {
  return (
    <section className={appStyles.sectionContainer}>
      <div className={appStyles.sectionTitleContainer}>
        <h2 className={appStyles.sectionTitle}>Proyectos</h2>
      </div>
      {projectsList.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;
