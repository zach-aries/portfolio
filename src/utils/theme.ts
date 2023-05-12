export const colors = {
  blue: {
    base: "#313349",
    800: "#212331",
    300: "#414562",
  },
  green: {
    base: "#70AE6E",
  },
  red: {
    base: "#e26d5a",
  },
  white: {
    base: "#F7F9F9",
    800: "#DDE4E4",
  },
  grey: {
    300: "#E9EAED",
    400: "#DDDDE3",
    600: "#C7C7D1",
    base: "#717C89",
  },
  yellow: {
    base: "#FAD54D",
  },
};

export const mediaQuery = {
  phone: "@media only screen and (max-width: 415px)",
  tablet: "@media only screen and (min-width:415px) and (max-width:961px)",
  desktop: "@media only screen and (min-width:961px)",
};

const theme = {
  colors,
  mediaQuery,
};

export default theme;
