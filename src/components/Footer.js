import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: " 10px 40px",
        marginTop: 10,
        borderTopColor: "primary.main",
        borderTopWidth: 2,
        borderTopStyle: "solid",
        "& Typography": {
          fontSize: 25,
        },
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ color: "secondary.main" }} gutterBottom>
          Formula
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: 15, color: "secondary.main" }}
        >
          &copy; Formula 2023. All Rights Reserved
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <EmailIcon style={{ color: "grey" }} />

        <Typography
          sx={{ fontSize: 15, color: "secondary.main", marginLeft: 2 }}
        >
          <a
            href="mailto:info@formula.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            info@formula.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
}
