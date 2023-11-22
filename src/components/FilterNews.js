import React, { useState } from "react";
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

  const inputCategory = [
    "General",
    "Business",
    "Entertainment",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];
  // const countries = ["us", "gb", "ca", "au", "in"];

  return (
    <>
      <div
        style={{
          padding: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: 30 }}>Formula Top Headlines</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
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
                  borderColor: "#c8bebead",
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
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                padding: 5,
                borderColor: "transparent",
                marginLeft: 10,
              }}
              onClick={() => setShowCategory(!showCategory)}
            >
              <FilterAltIcon />
              Filters
            </button>
          </div>
        </div>
      </div>
      {showCategory && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "0 40px",
            marginBottom: 20,
          }}
        >
          <div style={{ paddingRight: 30 }}>
            <p style={{ marginBottom: 10 }}>Category</p>
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
          </div>

          <div>
            <p style={{ marginBottom: 10 }}>Country</p>
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
          </div>
        </div>
      )}
    </>
  );
}
