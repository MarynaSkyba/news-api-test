import React from "react";
import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import noImage from "../img/noimage.jpeg";

export default function ArticlePage() {
  const location = useLocation();
  const navigation = useNavigate();
  const { title, description, source, date, image, content, author } =
    location.state || {};

  const onGoBack = () => {
    navigation(location?.state?.from?.location ?? "/");
  };

  return (
    <Box>
      <Box style={{ padding: 40 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
            paddingBottom: 5,
          }}
        >
          <ArrowBackIcon onClick={onGoBack} />
          <Typography variant="h3" sx={{ marginLeft: 2, fontSize: 20 }}>
            {title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "secondary.main",
            fontSize: 15,
            paddingBottom: 3,
          }}
        >
          <Typography variant="body1"> Source : {source}</Typography>
          <Typography variant="body1">Publication date {date}</Typography>
        </Box>

        <Typography variant="h5" gutterBottom>
          Description
        </Typography>
        {description ? (
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
        ) : (
          <Typography>No description available</Typography>
        )}
      </Box>

      {image ? (
        <img src={image} alt={title} style={{ width: "100%", margin: 0 }} />
      ) : (
        <Box style={{ display: "flex", justifyContent: "center" }}>
          <img src={noImage} alt="My Image" />
        </Box>
      )}

      <Box style={{ padding: 40 }}>
        <Typography variant="h5" gutterBottom>
          Content
        </Typography>
        {content ? (
          <Typography variant="body1" gutterBottom>
            {content}
          </Typography>
        ) : (
          <Typography variant="body1" gutterBottom>
            No content available
          </Typography>
        )}
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            borderTopColor: "#c8bebead",
            borderTopStyle: "solid",
            borderTopWidth: 1,
            paddingTop: 1,
            color: "secondary.main",
            fontSize: 15,
          }}
        >
          Authours: {author}
        </Typography>
      </Box>
    </Box>
  );
}
