import arrow from "../public/assets/Vector.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { publications } from "../public/data";
import styles from "../styles/Publications.module.css";
const Publications = () => {
  const [publication, setPublication] = useState(publications);
  return (
    <section className={styles.publications_container}>
      <h2>My Publications</h2>
      <p>
        Through writing, I come to understand my internal psychologies more{" "}
        <br />
        intimately than through any other form of semantic exploration.
      </p>
      <div className={styles.publications}>
        {publication.map((item) => {
          const { id, content, img, title } = item;
          return (
            <article key={id}>
              <div className={styles.img_container}>
                <Image
                  src={img}
                  layout="responsive"
                  height={400}
                  width={460}
                  className={styles.img}
                />
              </div>
              <div className={styles.content}>
                <h3>{title}</h3>
                <p> {content} </p>
              </div>

              <a href="#" className={styles.arrow}>
                <div className={styles.icon}>
                  <Image src={arrow} height={15.56} width={16} />
                </div>
              </a>
            </article>
          );
        })}
      </div>
      <button className="black_bcg_btn center_button">See All</button>
    </section>
  );
};

export default Publications;
