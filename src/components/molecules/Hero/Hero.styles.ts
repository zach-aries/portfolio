import { keyframes, style } from "typestyle";
import { colors } from "@/utils/theme";

const FINAL_HEIGHT = 180;

const displayTextAnimation = keyframes({
  "0%": {
    height: 0,
    fontSize: 100,
    lineHeight: "0%",
    letterSpacing: ".25em",
    opacity: 0,
  },
  "25%": {
    opacity: 0,
    height: 0,
    lineHeight: "0%",
  },
  "90%": {
    opacity: "100%",
    height: FINAL_HEIGHT,
  },
  "100%": {
    fontSize: FINAL_HEIGHT,
    lineHeight: "100%",
    letterSpacing: "0em",
    opacity: "100%",
  },
});

const seperatorAnimation = keyframes({
  "0%": {
    width: "100%",
    opacity: 1,
  },
  "25%": {
    width: "75%",
  },
  "100%": {
    width: "55%",
    opacity: 0,
  },
});

const styles = {
  container: style({
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: FINAL_HEIGHT + 2,
    width: "100%",
  }),
  displayText: style({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: FINAL_HEIGHT,
    fontSize: FINAL_HEIGHT,
    letterSpacing: "0em",
    color: "transparent",
    backgroundColor: colors.white.base,
    "-webkit-text-stroke": `1px ${colors.white.base}`,
    backgroundClip: "text",
    animationName: displayTextAnimation,
    animationDuration: "3s",
    animationTimingFunction: "ease-out",
  }),
  seperator: style({
    width: "55%",
    height: "1px",
    background:
      "linear-gradient(90deg, rgba(247,249,249,0) 0%, rgba(247,249,249,1) 33%, rgba(247,249,249,1) 66%, rgba(247,249,249,0) 100%)",
    opacity: 0,
    animationName: seperatorAnimation,
    animationDuration: "3s",
    animationTimingFunction: "ease-out",
  }),
};

export default styles;
