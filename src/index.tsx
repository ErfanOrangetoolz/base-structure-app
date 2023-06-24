import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import theme from "theme";
import EntryIndex from "./EntryIndex";

const rootElement = document.getElementById("pharmacy-app") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <EntryIndex />
  </ThemeProvider>
);
