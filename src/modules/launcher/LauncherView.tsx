//LauncherView.tsx

export const Launcher = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "65px",
        height: "65px",
        background: "#4F46E5",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "26px",
        }}
      >
        🤖
      </div>
    </div>
  );
};
