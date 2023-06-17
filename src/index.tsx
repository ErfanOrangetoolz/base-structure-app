import ReactDOM from "react-dom/client";
import EntryIndex from "./EntryIndex";

const rootElement = document.getElementById("pharmacy-app") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<EntryIndex />);
