import { style } from "typestyle";
import { mediaQuery } from "@/utils/theme";

const styles = {
  main: style({
    $debugName: "main",
    overflow: "hidden",
  }),
  row: style({
    $debugName: "row",
    display: "flex",
    flexDirection: "column",
    $nest: {
      [mediaQuery.desktop]: {
        flexDirection: "row",
      },
    },
  }),
  column: (width: number) =>
    style({
      $debugName: "column",
      padding: "0 2.5%",
      width: "100%",
      $nest: {
        [mediaQuery.desktop]: {
          width: width ? `${width}%` : "100%",
        },
      },
    }),
  verticalSpacing: (spacing: number) =>
    style({
      $debugName: "verticalSpacing",
      paddingTop: `${spacing}px !important`,
      paddingBottom: `${spacing}px !important`,
    }),
  marginBottom: (marginBottom: number) =>
    style({
      $debugName: "verticalSpacing",
      marginBottom,
    }),
  fontColor: (color: string) =>
    style({ $debugName: `fontColor${color}`, color }),
};

export default styles;
