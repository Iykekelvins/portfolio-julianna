import { links } from "../public/data";
import Image from "next/image";
import { Link } from "react-scroll";
import black_logo from "../public/assets/black_logo.png";
import close from "../public/assets/close.png";
import styles from "../styles/Modal.module.css";
import { useState } from "react";

const Modal = ({ modal, setModal }) => {
  const [navLinks, setNavLinks] = useState(links);
  return (
    <div className={styles.modal}>
      <nav className={styles.nav}>
        <Image src={black_logo} height={45} width={120} alt="" />
        <button onClick={() => setModal(!modal)}>
          <Image src={close} height={45} width={45} alt="" />
        </button>
      </nav>

      <ul className={styles.links}>
        {navLinks.map((links) => {
          const { id, title, link } = links;
          return (
            <li key={id}>
              <Link smooth={true} to={link}>
                <span onClick={() => setModal(!modal)}>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
