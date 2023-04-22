import { style, keyframes } from "typestyle";
import { colors } from "@/utils/theme";

const background = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },

  "100%": {
    transform: "rotate(360deg)",
  },
});

const styles = {
  heroContainer: style({
    $debugName: "heroContainer",
    position: "relative",
    overflow: "hidden",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: colors.blue[300],

    $nest: {
      "&::before, &::after": {
        content: `""`,
        display: "block",
        position: "absolute",
        zIndex: 0,
        top: 0,
        width: ["100vw", "100vmax"],
        height: ["100vh", "100vmax"],
        background: "rgba(0,0,0,0.05)",
        animationName: background,
        animationDuration: "90s",
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      },
      "&::after": {
        left: "15vw",
      },
      "&::before": {
        right: "15vw",
        animationDelay: "-30s",
        animationDirection: "reverse",
      },
    },
  }),
};

export default styles;
