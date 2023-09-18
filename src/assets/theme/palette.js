    const getDesignTokens = (mode) => ({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              // purples
              primary: {
                main: '#5439AC',
                title:"#92929220"
                // light: '#5439AC40',
                // dark: '#5e35b1',
                // darkest: '#3d348b',  
              },
              // background
              secondary: {
                main: '#F9F9FD',
                dark: '#333333',
                contrast: "#ffffff",
              },
              // texts
              info: {
                main: '#56596A',
                light: '#929292',
                // light: '#00000099',
                lightest: '#92929220',
                dark: '#ffffff',
                purple: "#5439AC",
              },
            }
          : {
              // palette values for dark mode
              // purples
              primary: {
                main: '#222222',
                title: "#222222"
                // title: ""
                // light: '#22222240',
                // dark: '#5e35b1',
                // darkest: '#3d348b', 
              },
              // background
              secondary: {
                main: '#333333',
                dark: '#F9F9FD',
                contrast: "#222222",
              },
              // texts
              info: {
                main: '#ffffff',
                light: '#ffffff',
                lightest: '#ffffff',
                dark: '#56596A',
                purple: "#ffffff",
              },
            }),
      },
    });
  
    export default getDesignTokens