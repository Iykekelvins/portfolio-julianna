import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Services.module.css";
import { services } from "../public/data";

const Services = () => {
  const [service, setService] = useState(services);
  return (
    <section className={styles.services_container}>
      <h2>What I do in a Nutshell</h2>
      <p className="intro_p">
        "Perfection is achieved, not when there is nothing more to add, but when
        there is <br className={styles.break} /> nothing left to take away." -
        <span> Antoine de Saint-Exupery.</span>
      </p>
      <div className={styles.services}>
        {service.map((item) => {
          const { icon, id, title, info } = item;
          return (
            <article key={id}>
              <div className={styles.icon}>
                <Image src={icon} height={71} width={62} />
              </div>
              <h4>{title}</h4>
              <p>{info} </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
