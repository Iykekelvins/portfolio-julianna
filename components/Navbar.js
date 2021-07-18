import Image from "next/image";
import logo from "../public/assets/logo.png";
import toggle from "../public/assets/toggle.png";
import styles from "../styles/Navbar.module.css";

const Navbar = ({ modal, setModal }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} height={45} width={120} alt="" />
      </div>
      <button onClick={() => setModal(!modal)}>
        <Image src={toggle} height={45} width={45} alt="" />
      </button>
    </nav>
  );
};

export default Navbar;
