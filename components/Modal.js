import Image from "next/image";
import Link from "next/link";
import black_logo from "../public/assets/black_logo.png";
import close from "../public/assets/close.png";
import styles from "../styles/Modal.module.css";

const Modal = ({ modal, setModal }) => {
  return (
    <div className={styles.modal}>
      <nav className={styles.nav}>
        <Image src={black_logo} height={45} width={120} />
        <button onClick={() => setModal(!modal)}>
          <Image src={close} height={45} width={45} />
        </button>
      </nav>

      <ul className={styles.links}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About Me</Link>
        </li>
        <li>
          <Link href="/">My Works</Link>
        </li>
        <li>
          <Link href="/">My Resume</Link>
        </li>
        <li>
          <Link href="/">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
