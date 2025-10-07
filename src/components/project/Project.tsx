import type { FC } from "react";
import type { TProject } from "../../types/projects";
import styles from "./project.module.css";

interface ProjectProps {
  project: TProject;
}

const Project: FC<ProjectProps> = ({ project }) => {
  return (
    <figure className={styles.projectCard}>
      <div className={styles.projectImageContainer}>
        <img
          className={styles.projectImage}
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <figcaption className={styles.projectDetails}>
        <h2 className={styles.projectTitle}>{project.title}</h2>
        <p className={styles.projectDescription}>{project.description}</p>
      </figcaption>
    </figure>
  );
};

export default Project;
