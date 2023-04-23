import { style } from "typestyle";
import { colors } from "@/utils/theme";

const styles = {
  headerSeperator: style({
    $debugName: "headerSeperator",
    position: "relative",
    $nest: {
      "&::after": {
        content: `''`,
        display: "block",
        position: "absolute",
        bottom: 0,
        width: "95%",
        height: 2,
        background: colors.blue.base,
        marginLeft: "2.5%",
        boxShadow: `2px 2px ${colors.white.base}`,
      },
    },
  }),
  infoPanel: style({
    $debugName: "infoPanel",
    background: colors.white[800],
    height: 575,
  }),
  profile: style({
    $debugName: "profile",
    display: "flex",
    alignItems: "flex-end",
    paddingBottom: "40px !important",
    color: colors.blue.base,
  }),
};

export default styles;
