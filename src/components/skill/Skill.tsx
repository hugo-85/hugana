import type { FC } from "react";
import type { skillType } from "../../types/skills";
import styles from "./skill.module.css";

interface SkillProps {
  skill: skillType;
}

const Skill: FC<SkillProps> = ({ skill }) => {
  return (
    <figure className={styles.skillCard}>
      <div className={styles.skillImageContainer}>
        <img
          className={styles.skillImage}
          src={skill.imageUrl}
          alt={skill.title}
          loading="lazy"
        />
      </div>
      <figcaption className={styles.skillDetails}>
        <h2 className={styles.skillTitle}>{skill.title}</h2>
        <div className={styles.skillDescriptionContainer}>
          <p className={styles.skillDescription}>{skill.description}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default Skill;
