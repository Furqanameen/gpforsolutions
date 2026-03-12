import { Link } from "react-router-dom";
import { LOGO, CONTACT_INFO, COMPANY_NAME, COMPANY_TAGLINE, COMPANY_WEBSITE } from "../data/siteData";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a1e", color: "#888" }}>
      {/* Top CTA strip */}
      <div style={{ background: "#c8a84b", padding: "28px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 18, color: "#fff", marginBottom: 4 }}>
              Ready to Secure Your Property?
            </p>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>Talk to our consultants today.</p>
          </div>
          <Link to="/contact">
            <button style={{
              background: "#0a0a1e", color: "#fff", border: "none",
              padding: "13px 32px", fontFamily: "'Montserrat', sans-serif",
              fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
              cursor: "pointer", transition: "background 0.3s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#12122e"}
              onMouseLeave={e => e.currentTarget.style.background = "#0a0a1e"}>
              Get In Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: "70px 5% 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 52 }}>
          {/* Brand */}
          <div>
            <img src={LOGO} alt={COMPANY_NAME} style={{ height: 54, objectFit: "contain", marginBottom: 24 }} />
            <p style={{ fontSize: 13, lineHeight: 1.9, color: "#666", maxWidth: 280, marginBottom: 24 }}>
              {COMPANY_TAGLINE}. Bespoke security solutions across the UK.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: "📞", href: `tel:${CONTACT_INFO.phone}` },
                { icon: "✉️", href: `mailto:${CONTACT_INFO.email}` },
                { icon: "📍", href: "https://www.google.com/maps?q=2+Gainsborough+Road+London+E11+1HT" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    width: 38, height: 38, background: "#1a1a3e", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, transition: "background 0.3s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#c8a84b"}
                  onMouseLeave={e => e.currentTarget.style.background = "#1a1a3e"}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services col 1 */}
          <div>
            <h4 style={{ color: "#fff", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24 }}>
              Our Services
            </h4>
            {["Security Guard", "Search Dog", "Mobile Patrols", "Vacant Property"].map(s => (
              <Link key={s} to={`/services/${s.toLowerCase().replace(/ /g, "-")}`}
                style={{ display: "block", color: "#666", fontSize: 13, marginBottom: 12, transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#c8a84b"}
                onMouseLeave={e => e.target.style.color = "#666"}>
                → {s}
              </Link>
            ))}
          </div>

          {/* Services col 2 */}
          <div>
            <h4 style={{ color: "#fff", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24 }}>
              More Services
            </h4>
            {["Event Security", "CCTV & Alarm", "Security Dog", "Waking Watch"].map(s => (
              <span key={s} style={{ display: "block", color: "#666", fontSize: 13, marginBottom: 12 }}>→ {s}</span>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 24 }}>
              Get In Touch
            </h4>
            {[
              { icon: "📞", text: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
              { icon: "✉️", text: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
              { icon: "📍", text: CONTACT_INFO.city, href: "https://www.google.com/maps?q=2+Gainsborough+Road+London+E11+1HT" },
            ].map(item => (
              <a key={item.text} href={item.href} target="_blank" rel="noreferrer"
                style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16, color: "#666", fontSize: 13, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c8a84b"}
                onMouseLeave={e => e.currentTarget.style.color = "#666"}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </a>
            ))}
            <Link to="/contact">
              <button style={{
                background: "#c8a84b", color: "#fff", border: "none",
                padding: "10px 22px", fontFamily: "'Montserrat', sans-serif",
                fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase",
                cursor: "pointer", marginTop: 8,
              }}>
                Send a Message
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #1a1a2e", paddingTop: 28, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 12, color: "#444" }}>© 2024 Garrison Apex Forte Solutions Ltd. All rights reserved.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Home", "About", "Services", "Contact"].map((p, i) => (
              <Link key={p} to={["/", "/about", "/services", "/contact"][i]}
                style={{ fontSize: 11, color: "#444", fontFamily: "'Montserrat', sans-serif", letterSpacing: 1, textTransform: "uppercase", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#c8a84b"}
                onMouseLeave={e => e.target.style.color = "#444"}>
                {p}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
