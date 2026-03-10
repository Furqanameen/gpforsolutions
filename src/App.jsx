import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";

function NotFound() {
  return (
    <div style={{ paddingTop: 150, textAlign: "center", minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>🔒</div>
      <h1 style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "4rem", fontWeight: 900, color: "#0a0a1e", marginBottom: 8 }}>404</h1>
      <p style={{ color: "#888", fontSize: 16, marginBottom: 32 }}>Page not found. Let's get you back on track.</p>
      <a href="/"><button className="btn-gold" style={{ border: "none" }}>Back to Home</button></a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
