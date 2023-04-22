import styles from "./Hero.styles";

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
    </div>
  );
};

export default Hero;
