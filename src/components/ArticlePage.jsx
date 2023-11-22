import React from "react";
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
    <div>
      <div style={{ padding: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            alignContent: "center",
            paddingBottom: 20,
          }}
        >
          <ArrowBackIcon onClick={onGoBack} />
          <h2 style={{ marginLeft: 10, fontSize: 20 }}>{title}</h2>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: " grey",
            fontSize: 15,
            paddingBottom: 20,
          }}
        >
          <p> Source : {source}</p>
          <p>Publication date {date}</p>
        </div>

        <p style={{ fontWeight: 700, paddingBottom: 10 }}>Description</p>
        {description ? (
          <p style={{ paddingBottom: 20 }}>{description}</p>
        ) : (
          <p>No description available</p>
        )}
      </div>

      {image ? (
        <img src={image} alt={title} style={{ width: "100%", margin: 0 }} />
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={noImage} alt="My Image" />
        </div>
      )}

      <div style={{ padding: 40 }}>
        <p style={{ fontWeight: 700, paddingBottom: 10 }}>Content</p>
        {content ? (
          <p style={{ paddingBottom: 30 }}>{content}</p>
        ) : (
          <p>No content available</p>
        )}
        <p
          style={{
            borderTopColor: "#c8bebead",
            borderTopStyle: "solid",
            borderTopWidth: 1,
            paddingTop: 10,
            color: "grey",
            fontSize: 15,
          }}
        >
          Authours: {author}
        </p>
      </div>
    </div>
  );
}
