import { style } from "typestyle";
import { important } from "csx";
import { colors, mediaQuery } from "@/utils/theme";

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
    alignSelf: "stretch",
    $nest: {
      [mediaQuery.desktop]: {
        minHeight: 575,
      },
    },
  }),
  content: style({
    $debugName: "content",
    flexDirection: important("column-reverse"),
    $nest: {
      [mediaQuery.desktop]: {
        flexDirection: important("row"),
      },
    },
  }),
  profile: style({
    $debugName: "profile",
    display: "flex",
    alignItems: "flex-end",
    paddingTop: "40px !important",
    paddingBottom: "40px !important",
    color: colors.blue.base,
  }),
  workExperience: style({
    $debugName: "workExperience",
    borderBottom: `solid 2px ${colors.white[800]}`,
    marginBottom: 35,
    paddingBottom: 25,
  }),
  company: style({
    $debugName: "company",
    marginBottom: 5,
  }),
  jobInfo: style({
    $debugName: "jobInfo",
    marginBottom: 12,
    display: "flex",
    justifyContent: "space-between",
  }),
  jobTitle: style({
    $debugName: "jobTitle",
    fontWeight: "bold",
    fontSize: 15,
  }),
  dates: style({
    $debugName: "dates",
    fontSize: 15,
    fontStyle: "italic",
    color: colors.grey.base,
  }),
};

export default styles;
