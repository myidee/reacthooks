import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App /> {/* using class component*/}
    <App2 /> {/* using functionl component */}
    <App3 /> {/* using state in functional component with useState */}
    <App4 /> {/* using multiple states */}
    <App5 /> {/* using previous state */}
    <App6 /> {/* another example using */}
    <App7 /> {/* another example using */}
  </StrictMode>
);
