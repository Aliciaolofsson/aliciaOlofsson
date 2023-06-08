import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import GlobalStyles from "./GlobalStyles";
import "./index.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Portfolio from "./pages/Portfolio";



export default function App () {
  return (
    <BrowserRouter>
    <GlobalStyles />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route index path="/hem" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/noPage" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

