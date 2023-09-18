import logo from './logo.svg';
import './App.css';
import { useState, createContext, useMemo } from "react";

// utils
import Menu from './utils/menu/Menu';
import Footer from './utils/footer/Footer';

// components
import Home from './pages/Home';

// mui theme (light and dark)
// import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";
import getDesignTokens from "./assets/theme/palette";


const ColorModeContext = createContext({ toggleColorMode: () => {} });


function App() {

  const [mode, setMode] = useState("light");
  // console.log("theme: ", mode)
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) =>
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
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
          <CssVarsProvider theme={theme}>
            <CssBaseline />

            <Menu theme={colorMode} />
            <Home />
            <Footer />

          </CssVarsProvider>
      </ColorModeContext.Provider>
    </div>
  );
}

export default App;
