import styles from "../styles/Footer.module.css";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import facebook from "../public/assets/facebook.png";
import behance from "../public/assets/behance.png";
import dribble from "../public/assets/dribble.png";
import twitter from "../public/assets/twitter.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src={logo} height={45} width={120} alt="" />
      <div className={styles.icon_container}>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
          <Image src={twitter} height={36} width={36} alt="" />
        </a>

        <a href="https://www.behance.com" target="_blank" rel="noreferrer">
          <Image src={behance} height={36} width={36} alt="" />
        </a>

        <a href="https://www.dribbble.com" target="_blank" rel="noreferrer">
          <Image src={dribble} height={36} width={36} alt="" />
        </a>

        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          <Image src={facebook} height={36} width={36} alt="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
