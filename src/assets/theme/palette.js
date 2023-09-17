    const getDesignTokens = (mode) => ({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              // purples
              primary: {
                main: '#5439AC',
                // light: '#5439AC40',
                // dark: '#5e35b1',
                // darkest: '#3d348b',  
              },
              // background
              secondary: {
                main: '#F9F9FD',
                dark: '#333333',
              },
              // texts
              info: {
                main: '#56596A',
                light: '#929292',
                // light: '#00000099',
                lightest: '#92929220',
                dark: '#ffffff',
              },
            }
          : {
              // palette values for dark mode
              // purples
              primary: {
                main: '#222222',
                // light: '#22222240',
                // dark: '#5e35b1',
                // darkest: '#3d348b', 
              },
            // background
            secondary: {
                main: '#333333',
                dark: '#F9F9FD',
              },
              // texts
              info: {
                main: '#ffffff',
                light: '#ffffff',
                lightest: '#ffffff20',
                dark: '#56596A',
              },
            }),
      },
    });
  
    export default getDesignTokens