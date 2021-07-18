import { useState } from "react";
import { works } from "../public/data";
import styles from "../styles/Works.module.css";

const Works = () => {
  const [work, setWork] = useState(works);
  return (
    <section className={styles.works_container}>
      <h2>My Works</h2>
      <p className="intro_p">
        "There is no such thing as a boring project. There are only boring
        executions" - <br /> <span> Irene Etzkorn</span>
      </p>
      <div className={styles.works}>
        {work.map((item) => {
          const {
            id,
            info,
            title,
            app,
            app_styles,
            case_styles,
            img1,
            img2,
            img1_styles,
            img2_styles,
            article_styles,
          } = item;
          return (
            <article key={id}>
              <div className={styles.info_div}>
                <span style={app_styles}>{app}</span>
                <h3>{title}</h3>
                <p>{info}</p>
                <button style={case_styles}>Case Study</button>
              </div>

              <div className={styles.img} style={img1_styles}>
                {img1}
              </div>
              <div className={styles.img} style={img2_styles}>
                {img2}
              </div>
            </article>
          );
        })}
      </div>
      <button className="black_bcg_btn center_button">See All</button>
    </section>
  );
};

export default Works;
