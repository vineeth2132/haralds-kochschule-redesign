import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import StandardPage from "./pages/StandardPage";
import Media from "./pages/Media";

import { pageData } from "./data/pages";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <>
      <ScrollToTop />

      <Navbar language={language} setLanguage={setLanguage} />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/media" element={<Media language={language} />} />

        {pageData.map((page) => (
          <Route
            key={page.slug}
            path={page.slug}
            element={<StandardPage page={page} language={language} />}
          />
        ))}
      </Routes>

      <Footer language={language} />
    </>
  );
}

export default App;