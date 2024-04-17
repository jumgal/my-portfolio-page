import { createTheme, ThemeOptions } from "@mui/material/styles";

// Augment the palette to include a violet color
declare module "@mui/material/styles" {
  interface Palette {
    otherColor: Palette["primary"];
  }

  interface PaletteOptions {
    otherColor?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a violet option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    violet: true;
    otherColor: true;
  }
}

const darkColor: string = "#151515";

const theme: ThemeOptions = createTheme({
  typography: {
    fontFamily: ["Space Grotesk", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
  palette: {
    background: {
      default: darkColor
    },
    text: {
      primary: "#ffffff"
    },
    primary: {
      light: "#d9d9d9",
      main: "#242424",
      dark: darkColor,
      contrastText: "#fff",
    },
    otherColor: {
      main: "#4ee1a0",
      light: "#d9d9d9",
      dark: "#ff6347",
      contrastText: "#151515",
    },
  },
});

export default theme;
