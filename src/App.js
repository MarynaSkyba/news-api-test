import { Routes, Route } from "react-router-dom";
import { createTheme, colors, ThemeProvider } from "@mui/material";
import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ECF0F6",
      light: "#fff",
      dark: colors.grey[900],
    },
    secondary: {
      main: colors.grey[500],
    },
  },
  typography: {
    fontFamily: ["Merriweather", "serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:title" element={<ArticlePage />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
