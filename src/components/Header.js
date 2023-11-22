import React from "react";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 80,
      }}
    >
      <p
        style={{
          fontSize: 30,
          color: "#fff",
          fontWeight: 700,
          textTransform: "uppercase",
        }}
      >
        Formula
      </p>
    </div>
  );
}
