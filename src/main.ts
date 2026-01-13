import { mountWidget } from "./bootstrap/mountWidget";

function safeMount() {
  const scriptTag = document.currentScript as HTMLScriptElement | null;
  const appId = scriptTag?.dataset?.appId || "default";
  mountWidget({ appId });
}

// 🔑 Delay mounting until the call stack is clean
if (typeof window !== "undefined") {
  if (document.readyState === "complete") {
    queueMicrotask(safeMount);
  } else {
    window.addEventListener("load", () => {
      queueMicrotask(safeMount);
    });
  }
}
