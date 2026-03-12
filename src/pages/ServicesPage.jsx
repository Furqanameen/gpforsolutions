import { Link } from "react-router-dom";
import { SERVICES } from "../data/siteData";

export default function ServicesPage() {
  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80)" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div style={{ width: 48, height: 2, background: "#c8a84b", margin: "0 auto 20px" }} />
          <h1>Our Services</h1>
          <p>Delivering high-quality security services to our clients.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section style={{ padding: "80px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div>
            <img src="https://k9securityspot.co.uk/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-15-at-18.08.08-1024x1024.jpeg"
              alt="Garrison Apex Forte Solutions Ltd Services"
              style={{ width: "100%", objectFit: "cover", aspectRatio: "1", borderRadius: 2, boxShadow: "0 25px 70px rgba(0,0,0,0.12)" }} />
          </div>
          <div>
            <span className="section-tag">About Our Services</span>
            <h2 className="section-title">More About Services</h2>
            <div className="section-divider" />
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 18, fontSize: 14 }}>
              Garrison Apex Forte Solutions Ltd are a nationwide security company formed with the aim of delivering high quality security services to our clients.
            </p>
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 18, fontSize: 14 }}>
              Our head office is based in Essex with further regional offices in London, Birmingham & Hampshire. We are therefore well-positioned to provide security services to organisations across the UK.
            </p>
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 32, fontSize: 14 }}>
              We are an SIA Approved Contractor for the provision of Security Guarding.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/contact"><button className="btn-gold" style={{ border: "none" }}>Contact Us</button></Link>
              <Link to="/about"><button className="btn-outline-gold">About Us</button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: "80px 8%", background: "#f8f8f8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-tag" style={{ display: "block" }}>What We Offer</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Our Services</h2>
            <div className="section-divider centered" />
            <p style={{ color: "#888", fontSize: 14 }}>Focused on results we seek to raise the level of our customers.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {SERVICES.map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
                <div className="service-card" style={{ height: "100%" }}>
                  <div className="service-card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p style={{ flex: 1 }}>{s.desc}</p>
                  <div style={{ marginTop: 24, display: "inline-block", color: "#c8a84b", fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", borderBottom: "1px solid #c8a84b", paddingBottom: 2 }}>
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: "80px 8%", background: "#0a0a1e", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-tag" style={{ display: "block" }}>Get Started</span>
          <h2 className="section-title light" style={{ textAlign: "center", marginBottom: 20 }}>Ready to Secure Your Premises?</h2>
          <div className="section-divider centered" />
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, marginBottom: 36, lineHeight: 1.9 }}>
            Talk to one of our security consultants today and get a tailored security solution for your needs.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact"><button className="btn-gold" style={{ border: "none" }}>Contact Us</button></Link>
            <a href="tel:+447526977812"><button className="btn-outline-white">📞 Call Now</button></a>
          </div>
        </div>
      </section>
    </div>
  );
}
