import type { FC, ReactNode } from "react";
import styles from "./footer.module.css";

interface FooterItemProps {
  icon: ReactNode;
  text: string;
}

const FooterItem: FC<FooterItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.footerItem}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default FooterItem;
