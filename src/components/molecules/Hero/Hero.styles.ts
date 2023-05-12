import { keyframes, style } from "typestyle";
import { colors, mediaQuery } from "@/utils/theme";

const FINAL_HEIGHT = {
  MOBILE: 68,
  TABLET: 76,
  DESKTOP: 180,
};

const displayTextAnimationMobile = keyframes({
  "0%": {
    height: 0,
    fontSize: FINAL_HEIGHT.MOBILE * 0.56,
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
    height: FINAL_HEIGHT.MOBILE,
  },
  "100%": {
    fontSize: FINAL_HEIGHT.MOBILE,
    lineHeight: "100%",
    letterSpacing: "0em",
    opacity: "100%",
  },
});

const displayTextAnimationTablet = keyframes({
  "0%": {
    height: 0,
    fontSize: FINAL_HEIGHT.TABLET * 0.56,
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
    height: FINAL_HEIGHT.TABLET,
  },
  "100%": {
    fontSize: FINAL_HEIGHT.TABLET,
    lineHeight: "100%",
    letterSpacing: "0em",
    opacity: "100%",
  },
});

const displayTextAnimationDesktop = keyframes({
  "0%": {
    height: 0,
    fontSize: FINAL_HEIGHT.DESKTOP * 0.56,
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
    height: FINAL_HEIGHT.DESKTOP,
  },
  "100%": {
    fontSize: FINAL_HEIGHT.DESKTOP,
    lineHeight: "100%",
    letterSpacing: "0em",
    opacity: "100%",
  },
});

const subTitleAnimation = keyframes({
  "0%": {
    marginTop: "-100%",
  },
  "100%": {
    marginTop: "0%",
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
    height: FINAL_HEIGHT.DESKTOP + 2 + 61,
    width: "100%",
  }),
  displayText: style({
    fontFamily: "Arial",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: FINAL_HEIGHT.MOBILE,
    fontSize: FINAL_HEIGHT.MOBILE,
    letterSpacing: "0em",
    color: "transparent",
    backgroundColor: colors.white.base,
    "-webkit-text-stroke": `1px ${colors.white.base}`,
    backgroundClip: "text",
    "-webkit-background-clip": "text",
    animationName: displayTextAnimationMobile,
    animationDuration: "3s",
    animationTimingFunction: "ease-out",
    $nest: {
      [mediaQuery.tablet]: {
        height: FINAL_HEIGHT.TABLET,
        fontSize: FINAL_HEIGHT.TABLET,
        animationName: displayTextAnimationTablet,
      },
      [mediaQuery.desktop]: {
        height: FINAL_HEIGHT.DESKTOP,
        fontSize: FINAL_HEIGHT.DESKTOP,
        animationName: displayTextAnimationDesktop,
      },
    },
  }),
  subtitleWrapper: style({
    $debugName: "subtitleWrapper",
    opacity: 1,
    maxHeight: 46,
    marginTop: 15,
    overflow: "hidden",
  }),
  subtitle: style({
    $debugName: "subtitle",
    fontSize: 16,
    letterSpacing: "0.1em",
    lineHeight: 1,
    color: colors.yellow.base,
    textTransform: "uppercase",
    height: 46,
    marginTop: "-100%",
    animationName: subTitleAnimation,
    animationDuration: "1s",
    animationDelay: "3s",
    animationTimingFunction: "ease-out",
    animationFillMode: "forwards",

    $nest: {
      [mediaQuery.tablet]: {
        fontSize: 21,
      },
      [mediaQuery.desktop]: {
        fontSize: 32,
      },
    },
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
