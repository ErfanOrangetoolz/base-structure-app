import { useMemo } from "react";
import Div from "./components/core/Div";

const EntryIndex = () => {
  const theme = useMemo(() => {
    return {
      typography: {
        primaryButton: {
          color: "",
          backgroundColor: "",
          fontFamily: "",
          fontSize: "",
          fontWeight: "",
          activeBgColor: "",
          activeTextColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
        },
        secondaryButton: {
          color: "",
          backgroundColor: "",
          fontFamily: "",
          fontSize: "",
          fontWeight: "",
          activeBgColor: "",
          activeTextColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
        },
        disableButton: {
          color: "",
          backgroundColor: "",
          fontFamily: "",
          fontSize: "",
          fontWeight: "",
          activeBgColor: "",
          activeTextColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
        },
        title: {
          color: "",
          backgroundColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
          activeTextColor: "",
          activeBGColor: "",
          fontSize: "",
          fontFamily: "",
          fontWeight: "",
        },
        subTitle: {
          color: "",
          backgroundColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
          activeTextColor: "",
          activeBGColor: "",
          fontSize: "",
          fontFamily: "",
          fontWeight: "",
        },
        planText: {
          color: "",
          backgroundColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
          activeTextColor: "",
          activeBGColor: "",
          fontSize: "",
          fontFamily: "",
          fontWeight: "",
        },
        disableText: {
          color: "",
          backgroundColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
          activeTextColor: "",
          activeBGColor: "",
          fontSize: "",
          fontFamily: "",
          fontWeight: "",
        },
        italicText: {
          color: "",
          backgroundColor: "",
          hoverBgColor: "",
          hoverTextColor: "",
          activeTextColor: "",
          activeBGColor: "",
          fontSize: "",
          fontFamily: "",
          fontWeight: "",
        },
        menu: {
          color: "",
          bg: "",
          activeBg: "",
          activeText: "",
          hoverBg: "",
          hoverText: "",
          badgeBg: "",
          badgeColor: "",
        },
        badge: {
          badgeBg: "",
          badgeColor: "",
        },
      },
      colors: {
        primary: "",
        secondary: "",
        disable: "",
        placeholder: "",
        border: "",
        input: "",
        mainBg: "",
        cardBg: "",
        headerTitleBg: "",
      },
      coreColor: {}, //no need here
      fontSize: {},
      fontFamily: {},
      others: {
        /* extra css property will be here will be here */
      },
    };
  }, []);
  console.log(theme);

  return <Div className='test'>asjdfnkl</Div>;
};
export default EntryIndex;

/* 
implement redux provider here
implement init call here
implement notification init here
implement other provider here
implement error boundary here
implement theme provider here
*/
