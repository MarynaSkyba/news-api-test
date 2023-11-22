import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import { Rings } from "react-loader-spinner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticlePage from "./components/ArticlePage";

const loader = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 200,
};

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>

   
    <Suspense
      fallback={
        <Rings
          type="Hearts"
          color="#a52a62"
          height={200}
          width={200}
          timeout={3000}
          display="flex"
          justify-content="center"
          className={loader}
        />
      }
    >

      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:title" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </Suspense>
    </div>
  );
}

export default App;
