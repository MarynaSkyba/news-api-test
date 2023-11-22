import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ArticlePage() {
  const location = useLocation();
  const navigation = useNavigate();
  const article = location.state?.article;
  const { state } = location;

  console.log("state", state);
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
          <h2 style={{ marginLeft: 10, fontSize: 20 }}>{state.title}</h2>
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
          <p> Source : {state.source}</p>
          <p>Publication date {state.date}</p>
        </div>

        <p style={{ fontWeight: 700, paddingBottom: 10 }}>Description</p>
        <p style={{ paddingBottom: 20 }}>{state.description}</p>
      </div>

      <img
        src={state.image}
        alt={state.title}
        style={{ width: "100%", margin: 0 }}
      />

      <div style={{ padding: 40 }}>
        <p style={{ fontWeight: 700, paddingBottom: 10 }}>Content</p>
        <p style={{ paddingBottom: 30 }}>{state.content}</p>
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
          Authours: {state.author}
        </p>
      </div>
    </div>
  );
}
