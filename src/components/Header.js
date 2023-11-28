import React from "react";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "primary.light", textTransform: "uppercase" }}
      >
        Formula
      </Typography>
    </Box>
  );
}
