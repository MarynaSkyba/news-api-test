import React, { useState } from "react";
import { Box, Button, useTheme, Typography, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import countries from "../contries";

export default function FilterNews({
  filter,
  handleFilterChange,
  category,
  setCategory,
  country,
  setCountry,
}) {
  const [showCategory, setShowCategory] = useState(false);
  const initialValue = countries.find((c) => c.code === country);
  const theme = useTheme();

  const inputCategory = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  return (
    <>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 40,
        }}
      >
        <Box>
          <Typography variant="h4" style={{ fontSize: 30 }}>
            Formula Top Headlines
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ position: "relative" }}>
              <input
                type="text"
                id="filter"
                placeholder="Search article"
                value={filter}
                style={{
                  paddingLeft: 40,
                  paddingTop: 10,
                  paddingBottom: 10,
                  borderRadius: 10,
                  borderColor: theme.palette.secondary.main,
                  borderWidth: 1,
                }}
                onChange={(event) => handleFilterChange(event)}
              />
              <SearchIcon
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 8,
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>

          <Button
            startIcon={<FilterAltIcon />}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              padding: 8,
              borderColor: "transparent",
              color: theme.palette.primary.dark,
              marginLeft: 10,
              backgroundColor: theme.palette.primary.main,
              textTransform: "none",
            }}
            onClick={() => setShowCategory(!showCategory)}
          >
            Filters
          </Button>
        </Box>
      </Box>

      {showCategory && (
        <Stack
          spacing={2}
          direction="row"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0 40px",
            marginBottom: 20,
          }}
        >
          <Box style={{ paddingRight: 30 }}>
            <Typography variant="subtitle1" gutterBottom>
              Category
            </Typography>
            <Autocomplete
              disablePortal
              size="small"
              disableClearable={true}
              options={inputCategory}
              sx={{ width: 200 }}
              value={category}
              onChange={(event, newValue) => setCategory(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>

          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Country
            </Typography>

            <Autocomplete
              disablePortal
              size="small"
              disableClearable={true}
              options={countries}
              value={initialValue || null}
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(option, value) =>
                option.code === value.code
              }
              sx={{ width: 200 }}
              onChange={(event, newValue) => setCountry(newValue.code)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </Stack>
      )}
    </>
  );
}
