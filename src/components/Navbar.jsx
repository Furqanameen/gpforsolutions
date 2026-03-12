import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOGO, NAV_LINKS, COMPANY_NAME } from "../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(10,10,30,0.98)" : "rgba(10,10,30,0.88)",
        backdropFilter: "blur(12px)",
        height: 72,
        display: "flex", alignItems: "center",
        padding: "0 5%",
        justifyContent: "space-between",
        transition: "background 0.3s",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src={LOGO} alt={COMPANY_NAME} style={{ height: 46, objectFit: "contain" }} />
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="hide-mobile">
          {NAV_LINKS.map(link => (
            <div key={link.label} style={{ position: "relative", paddingBottom: link.dropdown ? 12 : 0 }}
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}>
              <Link to={link.path} style={{
                color: location.pathname === link.path ? "#c8a84b" : "#fff",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12, fontWeight: 700,
                letterSpacing: 1.5, textTransform: "uppercase",
                display: "flex", alignItems: "center", gap: 5,
                padding: "4px 0",
                borderBottom: location.pathname === link.path ? "2px solid #c8a84b" : "2px solid transparent",
                transition: "color 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.color = "#c8a84b"; }}
                onMouseLeave={e => { e.currentTarget.style.color = location.pathname === link.path ? "#c8a84b" : "#fff"; }}>
                {link.label}
                {link.dropdown && <span style={{ fontSize: 9, marginTop: 1 }}>▼</span>}
              </Link>

              {/* Dropdown */}
              {link.dropdown && dropdownOpen && (
                <div style={{
                  position: "absolute", top: "100%", left: 0,
                  background: "#0a0a1e",
                  minWidth: 230, zIndex: 999,
                  boxShadow: "0 16px 50px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  paddingTop: 0,
                }}>
                  {link.dropdown.map(item => (
                    <Link key={item.label} to={item.path} style={{
                      display: "block", padding: "12px 20px",
                      fontSize: 12, fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600, letterSpacing: 0.5,
                      color: "#ccc",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "all 0.2s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#c8a84b"; e.currentTarget.style.color = "#fff"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#ccc"; }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{ background: "none", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", fontSize: 18, cursor: "pointer", padding: "6px 12px", borderRadius: 3 }}>
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 72, left: 0, right: 0, bottom: 0,
          background: "#0a0a1e", zIndex: 999,
          overflowY: "auto", padding: "20px 5%",
        }}>
          {NAV_LINKS.map(link => (
            <div key={link.label}>
              <Link to={link.path} style={{
                display: "block", padding: "16px 0",
                color: "#fff", fontFamily: "'Montserrat', sans-serif",
                fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}>
                {link.label}
              </Link>
              {link.dropdown && link.dropdown.map(item => (
                <Link key={item.label} to={item.path} style={{
                  display: "block", padding: "12px 20px",
                  color: "#999", fontFamily: "'Montserrat', sans-serif",
                  fontSize: 12, fontWeight: 600,
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}>
                  → {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
