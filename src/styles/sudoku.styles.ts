import { style } from "typestyle";
import { colors } from "@/utils/theme";

const styles = {
  container: style({
    $debugName: "container",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "50px 0",
  }),
  row: style({
    $debugName: "row",
    display: "flex",
    width: 48 * 9,
    $nest: {
      "&:last-of-type": {
        borderBottom: "solid 3px black",
      },
      "&:nth-child(3n+1)": {
        borderTop: "solid 2px black",
      },
      "@media only screen and (max-width: 560px)": {
        width: 36 * 9,
      },
    },
  }),
  cell: style({
    $debugName: "cell",
    borderTop: "solid 1px black",
    borderLeft: "solid 1px black",
    height: 48,
    width: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    background: colors.white.base,
    $nest: {
      "&:last-of-type": {
        borderRight: "solid 3px black",
      },
      "&:nth-child(3n+1)": {
        borderLeft: "solid 3px black",
      },
      "@media only screen and (max-width: 560px)": {
        height: 36,
        width: 36,
      },
    },
  }),
  cellHover: style({
    $debugName: "cellHover",
    $nest: {
      "&:hover": {
        background: colors.grey[400],
        color: colors.blue.base,
      },
    },
  }),
  cellStatic: style({
    $debugName: "cellStatic",
    background: colors.white[800],
  }),
  cellHightlight: style({
    $debugName: "cellHightlight",
    background: colors.grey[300],
  }),
  cellSelected: style({
    $debugName: "cellSelected",
    background: colors.grey[600],
  }),
  cellNotSafe: style({
    $debugName: "cellNotSafe",
    color: colors.red.base,
    fontWeight: "bold",
  }),
  numberSelector: style({
    $debugName: "numberSelector",
    display: "flex",
    flexDirection: "row",
    width: 48 * 10,
    listStyle: "none",
    margin: "25px 0",
    padding: 0,
    borderTop: "solid 1px black",
    borderLeft: "solid 1px black",
    borderBottom: "solid 1px black",
    $nest: {
      "@media only screen and (max-width: 560px)": {
        width: 36 * 10,
      },
    },
  }),
  numberButton: style({
    $debugName: "numberButton",
    height: 48,
    width: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRight: "solid 1px black",
    background: colors.white.base,
    cursor: "pointer",
    $nest: {
      "&:hover": {
        background: colors.white[800],
      },
      "@media only screen and (max-width: 560px)": {
        height: 36,
        width: 36,
      },
    },
  }),
};

export default styles;
