import { mountWidget } from "./bootstrap/mountWidget";

// Auto start when script is loaded
if (typeof window !== "undefined") {
  mountWidget();
}
