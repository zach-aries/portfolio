import Link from "next/link";
import { classes } from "typestyle";

import styles from "./Navigation.styles";

interface Props {
  title: string;
  href: string;
  active: boolean;
}

export default function NavigationLink(props: Props) {
  const { active, title, href } = props;
  return (
    <Link className={classes(styles.link, active && styles.active)} href={href}>
      {title}
    </Link>
  );
}
