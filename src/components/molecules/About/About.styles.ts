import { style } from "typestyle";
import { colors } from "@/utils/theme";
import { mediaQuery } from "@/utils/theme";

const styles = {
  container: style({
    $debugName: "container",
    position: "relative",
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    $nest: {
      [mediaQuery.tablet]: {
        height: 400,
        flexDirection: "row",
        marginBottom: 20,
      },
      [mediaQuery.desktop]: {
        height: 400,
        flexDirection: "row",
      },
    },
  }),
  titleWrapper: style({
    $debugName: "titleWrapper",
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    zIndex: 1,
    lineHeight: 1,
    padding: "40px 0",
    $nest: {
      [mediaQuery.tablet]: {
        position: "absolute",
        marginLeft: "30vw",
        width: "60vw",
        padding: 0,
      },
      [mediaQuery.desktop]: {
        position: "absolute",
        marginLeft: "20vw",
        width: "50vw",
        padding: 0,
      },
      "&::before": {
        content: `''`,
        position: "absolute",
        display: "block",
        borderRadius: "50%",
        background: colors.yellow.base,
        bottom: 25,
        right: 50,
        width: "25vw",
        height: "25vw",

        $nest: {
          [mediaQuery.tablet]: {
            bottom: "-3vw",
            right: -20,
            width: "15vw",
            height: "15vw",
          },
          [mediaQuery.desktop]: {
            bottom: "-3vw",
            right: -20,
            width: "15vw",
            height: "15vw",
          },
        },
      },
    },
  }),
  title: style({
    $debugName: "title",
    position: "relative",
    margin: 0,
    fontSize: 38,
    zIndex: 1,
    textShadow: `2px 2px ${colors.white.base}`,
    color: colors.blue[800],
    $nest: {
      [mediaQuery.tablet]: {
        fontSize: "7.75vw",
      },
      [mediaQuery.desktop]: {
        fontSize: "6.5vw",
      },
    },
  }),
  subTitle: style({
    $debugName: "subTitle",
    position: "relative",
    fontSize: 14,
    letterSpacing: "0.65vw",
    color: colors.blue[800],
    textTransform: "uppercase",
    marginLeft: "5vw",
    marginBottom: 0,
    zIndex: 1,
    $nest: {
      [mediaQuery.tablet]: {
        fontSize: "2vw",
      },
      [mediaQuery.desktop]: {
        fontSize: "1.2vw",
      },
    },
  }),
  profilePicture: style({
    $debugName: "profilePicture",
    position: "relative",
    left: 0,
    filter: "grayscale(0.5) brightness(1.15)",
    objectFit: "cover",
    width: "100%",
    $nest: {
      [mediaQuery.tablet]: {
        position: "absolute",
        width: "25vw",
      },
      [mediaQuery.desktop]: {
        position: "absolute",
        width: "18vw",
      },
    },
  }),
};

export default styles;
