import Image from "next/image";
import { useState } from "react";
import { tools } from "../public/data";
import styles from "../styles/Tools.module.css";

const Tools = () => {
  const [tool, setTool] = useState(tools);
  return (
    <section className={styles.tools_container}>
      <div>
        <h2>
          "You can't wait for <br className={styles.break} /> inspiration, you
          have to go <br className={styles.break} /> after it with a club."
        </h2>
        <p className="intro_p">
          If a design is a mindset, a design tool is the hand of{" "}
          <br className={styles.break} /> the mind. Here are the tools I take
          pleasure in <br className={styles.break} /> working with;
        </p>
      </div>
      <div className={styles.tools}>
        {tool.map((item) => {
          const { id, icon, tool, icon_styles } = item;
          return (
            <div key={id} className={styles.tool}>
              <Image
                alt=""
                src={icon}
                height={icon_styles.height}
                width={icon_styles.width}
              />
              <div> {tool}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tools;
