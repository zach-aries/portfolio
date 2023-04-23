import Image from "next/image";
import { classes } from "typestyle";
import { Playfair_Display } from "next/font/google";

import styles from "./About.styles";

const playfair = Playfair_Display({ weight: "400", subsets: ["latin"] });

interface Props {
  title: string;
  subTitle: string;
}

const About = (props: Props) => {
  const { title, subTitle } = props;
  return (
    <div className={styles.container}>
      <Image
        className={styles.profilePicture}
        src="profile.jpg"
        alt="Zach Aries Profile"
        width={400}
        height={400}
      />
      <div className={styles.titleWrapper}>
        <h3 className={classes(playfair.className, styles.subTitle)}>
          {subTitle}
        </h3>
        <h2 className={classes(playfair.className, styles.title)}>{title}</h2>
      </div>
    </div>
  );
};

export default About;
