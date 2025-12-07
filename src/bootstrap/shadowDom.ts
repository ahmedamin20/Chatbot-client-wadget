export function createShadowRoot() {
  const host = document.createElement("div");
  host.id = "chat-widget-host";
  const shadow = host.attachShadow({ mode: "open" });
  document.body.appendChild(host);

  const root = document.createElement("div");
  shadow.appendChild(root);

  return { root, shadow };
}
