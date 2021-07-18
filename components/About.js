import styles from "../styles/About.module.css";
import Image from "next/image";
import facebook from "../public/assets/facebook.png";
import behance from "../public/assets/behance.png";
import dribble from "../public/assets/dribble.png";
import twitter from "../public/assets/twitter.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.intro}>
        <h4>Hello, I'm</h4>
        <h1>
          <span>Juli</span>anna
        </h1>
        <p className="intro_p">
          I specialize in designing and developing user interfaces and digital
          products.
          <br /> I don't restrict myself to design. The blend of design, user
          experience,
          <br /> marketing, and business is where I feel I excel
        </p>
        <div className={styles.icon_container}>
          <a href="https://www.twitter.com" target="_blank">
            <Image src={twitter} height={36} width={36} />
          </a>

          <a href="https://www.behance.com" target="_blank">
            <Image src={behance} height={36} width={36} />
          </a>

          <a href="https://www.dribbble.com" target="_blank">
            <Image src={dribble} height={36} width={36} />
          </a>

          <a href="https://www.facebook.com" target="_blank">
            <Image src={facebook} height={36} width={36} />
          </a>
        </div>
        <div className={styles.btn_container}>
          <button className={styles.hire_btn}>
            <a href="https://www.linkedin.com" target="_blank">
              Hire Me
            </a>
          </button>
          <button className="black_bcg_btn">
            <a href="https://www.gmail.com">Contact Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
