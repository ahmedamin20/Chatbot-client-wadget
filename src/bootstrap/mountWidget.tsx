import ReactDOM from "react-dom/client";
import App from "../App";
import { createShadowRoot } from "./shadowDom";

interface MountOptions {
  appId?: string;
}

export function mountWidget(options: MountOptions = {}) {
  const { root, shadow } = createShadowRoot();

  // Inject Tailwind CSS into Shadow DOM
  const styleLink = document.createElement("link");
  styleLink.rel = "stylesheet";
  styleLink.href = "https://cdn.jsdelivr.net/npm/tailwindcss@3.4.1/dist/tailwind.min.css";
  shadow.appendChild(styleLink);

  // Mount React app
  ReactDOM.createRoot(root).render(<App {...options} />);
}
