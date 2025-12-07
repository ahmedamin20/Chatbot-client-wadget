import { mountWidget } from "./bootstrap/mountWidget";

// Auto-mount on script load
if (typeof window !== "undefined" && document.currentScript !== undefined ) {
  const scriptTag = document.currentScript as HTMLScriptElement;
  const appId = scriptTag?.dataset?.appId || "default";
  mountWidget({ appId });
}
