import { useRouter } from "next/router";
import { classes } from "typestyle";
import { Roboto } from "next/font/google";
import styles from "./Navigation.styles";

import Link from "./Link";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const links = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
];

interface Props {
  position?: "absolute" | "static" | "fixed";
  transparent?: boolean;
}

export default function Navigation(props: Props) {
  const { position, transparent } = props;
  const { pathname } = useRouter();

  return (
    <nav
      className={classes(
        styles.container,
        roboto.className,
        position && styles.position(position),
        transparent && styles.transparent
      )}
    >
      {links.map(({ href, title }) => (
        <Link key={href} active={href === pathname} href={href} title={title} />
      ))}
    </nav>
  );
}
