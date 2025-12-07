//ChatView.tsx
import { useState } from "react";

export const ChatView = ({ onClose }: { onClose: () => void }) => {
  const [messages, setMessages] = useState([{
    sender: "Support",
    text: "Hello! How can we assist you today?"
  }]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "100px",
        right: "20px",
        width: "360px",
        height: "500px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          padding: "15px",
          background: "#4F46E5",
          color: "#fff",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Chat Support
        <button style={{ color: "#fff" }} onClick={onClose}>✕</button>
      </div>

      <div
        style={{
          flex: 1,
          padding: "15px",
          overflowY: "auto",
        }}
      >
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: "10px" }}>
            <b>{msg.sender}:</b> {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};
