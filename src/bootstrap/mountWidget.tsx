import ReactDOM from "react-dom/client";
import App from "../App";
import { createShadowRoot } from "./shadowDom";

export function mountWidget() {
  const { root, shadow } = createShadowRoot();

  // Inject CSS inside Shadow DOM
  const style = document.createElement("style");
  style.textContent = `
    :host { all: initial; }
  `;
  shadow.appendChild(style);

  ReactDOM.createRoot(root).render(<App />);
}
