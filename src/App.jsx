import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
// import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      {/* <WelcomePage /> */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
