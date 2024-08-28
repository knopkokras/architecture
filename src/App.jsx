import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import Footer from "./components/Footer";
import "./scss/main.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
