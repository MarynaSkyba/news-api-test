import React from "react";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: " 10px 40px",
        marginTop: 10,
        borderTopColor: "#c8bebead",
        borderTopWidth: 2,
        borderTopStyle: "solid",
      }}
    >
      <div>
        <p style={{ fontSize: 25, color: "grey", marginBottom: 10 }}>Formula</p>
        <p style={{ fontSize: 15, color: "grey" }}>
          &copy; Formula 2023. All Rights Reserved
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EmailIcon style={{ color: "grey" }} />
        <p style={{ fontSize: 15, color: "grey", marginLeft: 10 }}>
          info@formula.com
        </p>
      </div>
    </div>
  );
}
