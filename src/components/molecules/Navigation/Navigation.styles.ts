import { style } from "typestyle";
import { colors } from "@/utils/theme";

const styles = {
  container: style({
    $debugName: "container",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 62,
    width: "100%",
    background: colors.blue.base,
    padding: "0 2.5%",
  }),
  position: (position: "absolute" | "static" | "fixed") =>
    style({
      $debugName: "position",
      position,
      top: 0,
      left: 0,
      zIndex: 2,
    }),
  transparent: style({
    $debugName: "transparent",
    background: "transparent!important",
  }),
  link: style({
    $debugName: "link",
    color: colors.white.base,
    fontSize: 16,
    marginLeft: 15,
    padding: "2px 0",
    transition: "padding 0.1s",
    $nest: {
      "&:hover": {
        padding: "1px 0 4px",
      },
    },
  }),
  active: style({
    $debugName: "active",
    borderBottom: `solid 1px ${colors.white.base}`,
  }),
};

export default styles;
