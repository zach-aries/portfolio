import { style } from "typestyle";
import { mediaQuery } from "@/utils/theme";

const styles = {
  iconList: style({
    $debugName: "iconList",
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 0,
    opacity: 0.75,
  }),
  iconListItem: style({
    $debugName: "iconListItem",
    lineHeight: 0,
    position: "relative",
    width: "25%",
    $nest: {
      [mediaQuery.tablet]: {
        width: "10%",
      },
      [mediaQuery.desktop]: {
        width: "25%",
      },
      "&::before": {
        display: "block",
        content: `''`,
        width: "100%",
        paddingTop: "100%",
      },
    },
  }),
  iconListItemInner: style({
    $debugName: "iconListItemInner",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  }),
};

export default styles;
