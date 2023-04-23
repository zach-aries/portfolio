import { style } from "typestyle";
import { colors } from "@/utils/theme";

const styles = {
  container: style({
    $debugName: "container",
    position: "relative",
    marginTop: 20,
    height: 400,
    display: "flex",
    alignItems: "center",
  }),
  titleWrapper: style({
    $debugName: "titleWrapper",
    position: "absolute",
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "16vw",
    zIndex: 1,
    lineHeight: 1,
    $nest: {
      "&::before": {
        content: `''`,
        position: "absolute",
        top: -80,
        right: -20,
        display: "block",
        width: 275,
        height: 275,
        borderRadius: "50%",
        background: colors.yellow.base,
      },
    },
  }),
  title: style({
    $debugName: "title",
    position: "relative",
    margin: 0,
    fontSize: "6.5vw",
    zIndex: 1,
    textShadow: `2px 2px ${colors.white.base}`,
    color: colors.blue[800],
  }),
  subTitle: style({
    $debugName: "subTitle",
    position: "relative",
    fontSize: "1.2vw",
    letterSpacing: "0.65vw",
    color: colors.blue[800],
    textTransform: "uppercase",
    marginLeft: "5vw",
    marginBottom: 0,
    zIndex: 1,
  }),
  profilePicture: style({
    $debugName: "profilePicture",
    position: "absolute",
    left: 0,
    filter: "grayscale(0.5) brightness(1.15)",
    objectFit: "cover",
    width: "18vw",
  }),
};

export default styles;
