import { useMemo } from "react";

const App = () => {
  const theme = useMemo(() => {
    return {
      typography: {
        h1: {},
        h2: {},
        h3: {},
        h4: {},
        h5: {},
        p: {},
        a: {},
        span: {},
        primaryButton: {},
        secondaryButton: {},
      },
      colors: {
        primary: "",
        secondary: "",
      },
      fontSize: {},
      fontFamily: {},
    };
  }, []);
  console.log(theme);
  return null;
};
export default App;

/* 
Custom Theme Provider
all provider will be here
*/
