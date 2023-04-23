import { style } from "typestyle";

const styles = {
  main: style({
    $debugName: "main",
    overflow: "hidden",
  }),
  row: style({
    $debugName: "row",
    display: "flex",
  }),
  column: (width: number) =>
    style({
      $debugName: "column",
      padding: "0 2.5%",
      width: width ? `${width}%` : "100%",
    }),
  verticalSpacing: (spacing: number) =>
    style({
      $debugName: "verticalSpacing",
      paddingTop: spacing,
      paddingBottom: spacing,
    }),
};

export default styles;
