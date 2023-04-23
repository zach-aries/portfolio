import { classes } from "typestyle";
import { Playfair_Display } from "next/font/google";

import styles from "./Hero.styles";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

interface Props {
  title: string;
}

const Hero = (props: Props) => {
  const { title } = props;
  return (
    <div className={styles.container}>
      <div className={styles.seperator} />
      <h1 className={styles.displayText}>{title}</h1>
      <div className={styles.seperator} />
      <div className={styles.subtitleWrapper}>
        <div className={classes(styles.subtitle, playfair.className)}>
          Software Engineer
        </div>
      </div>
    </div>
  );
};

export default Hero;
