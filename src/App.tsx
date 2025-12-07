import { useState } from "react";
import { Launcher } from "./modules/launcher/LauncherView";
import { ChatView } from "./modules/chat/chatView";

interface AppProps {
  appId?: string;
}

export default function App({ appId }: AppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Launcher onClick={() => setOpen(!open)} />
      {open && <ChatView onClose={() => setOpen(false)} />}
    </>
  );
}
