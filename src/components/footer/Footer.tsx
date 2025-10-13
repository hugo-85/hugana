import type { FC } from "react";
import styles from "./footer.module.css";
import PhoneIcon from "../../svgs/PhoneIcon";
import FooterItem from "./FotterItem";
import EmailIcon from "../../svgs/EmailIcon";

const Footer: FC = () => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerLogoContainer}>
        <img src="imgs/hugana_logo.webp" className={styles.footerLogo} />
      </div>
      <div className={styles.footerContent}>
        <FooterItem
          icon={<PhoneIcon color="white" />}
          text="+54 9 2920 619296"
        />
        <FooterItem
          icon={<EmailIcon color="white" />}
          text="hugana@gmail.com"
        />
      </div>
    </footer>
  );
};

export default Footer;
