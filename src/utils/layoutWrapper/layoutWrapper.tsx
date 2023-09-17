"use client";
import "./globals.css";
import { useState, createContext, useMemo } from "react";

// components
import Menu from "../menu/Menu";

// mui theme (light and dark)
// import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";
import getDesignTokens from "../../assets/theme/palette";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const layoutWrapper = () => {

  const [mode, setMode] = useState<PaletteMode>("light");
  // console.log("theme: ", mode)
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
        // setMode(mode)
      },
    }),
    []
  );

  // @ts-ignore
  const theme = useMemo(() => extendTheme(getDesignTokens(mode)), [mode]);


  return (
    <div>
      <ColorModeContext.Provider value={colorMode}>
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <Menu theme={colorMode} />
          </CssVarsProvider>
        </ColorModeContext.Provider>
    </div>
  )
}

export default layoutWrapper
