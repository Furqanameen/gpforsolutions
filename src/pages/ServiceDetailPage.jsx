import { useParams, Link } from "react-router-dom";
import { SERVICES, CONTACT_INFO } from "../data/siteData";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) return (
    <div style={{ paddingTop: 150, textAlign: "center", minHeight: "60vh" }}>
      <h2 style={{ fontFamily: "'Montserrat',sans-serif", color: "#0a0a1e", marginBottom: 16 }}>Service Not Found</h2>
      <Link to="/services"><button className="btn-gold" style={{ border: "none" }}>Back to Services</button></Link>
    </div>
  );

  const otherServices = SERVICES.filter(s => s.slug !== slug).slice(0, 4);

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero" style={{ height: 420 }}>
        <div className="page-hero-bg" style={{ backgroundImage: `url(${service.heroImage})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div style={{ width: 48, height: 2, background: "#c8a84b", margin: "0 auto 20px" }} />
          <h1>{service.title}</h1>
          <p style={{ maxWidth: 600, margin: "12px auto 0" }}>{service.heroSub}</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/services">Services</Link>
            <span>›</span>
            <span>{service.title}</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section style={{ padding: "90px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 60 }} className="grid-2">
          {/* Left: main content */}
          <div>
            <span className="section-tag">About This Service</span>
            <h2 className="section-title">About {service.title}</h2>
            <div className="section-divider" />
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 32, fontSize: 14 }}>
              {service.detail}
            </p>

            {/* Service image */}
            {service.image && (
              <div style={{ marginBottom: 40 }}>
                <img src={service.image} alt={service.title}
                  style={{ width: "100%", maxHeight: 380, objectFit: "contain", display: "block", background: "#f8f8f8" }} />
              </div>
            )}

            {/* Features */}
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, color: "#0a0a1e", marginBottom: 24 }}>
              We provide highly trained and experienced {service.title.toLowerCase()} teams
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40 }} className="grid-2">
              {service.features.map(f => (
                <div key={f.title} style={{ borderLeft: "3px solid #c8a84b", paddingLeft: 20 }}>
                  <h4 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: "#0a0a1e", marginBottom: 8 }}>{f.title}</h4>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.8 }}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div style={{ background: "#0a0a1e", padding: "40px 36px", marginBottom: 32 }}>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 28 }}>Why Choose Us?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {["100%\nReliability", "100%\nQuality", "100%\nResponsibility", "100%\nServices"].map(stat => {
                  const [num, label] = stat.split("\n");
                  return (
                    <div key={label} style={{ textAlign: "center", padding: "20px 10px", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 900, fontSize: "1.6rem", color: "#c8a84b", marginBottom: 6 }}>{num}</div>
                      <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/services"><button className="btn-outline-gold">Other Services</button></Link>
              <Link to="/contact"><button className="btn-gold" style={{ border: "none" }}>Contact Us</button></Link>
            </div>
          </div>

          {/* Right: sidebar */}
          <div>
            {/* Quick Contact */}
            <div style={{ background: "#0a0a1e", padding: 32, marginBottom: 28 }}>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                Quick Contact
              </h3>
              {[
                { icon: "📞", label: "Contact", val: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
                { icon: "✉️", label: "Email", val: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
                { icon: "🌐", label: "Website", val: "www.gpforsolutions.com", href: "https://gpforsolutions.com" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", gap: 12, marginBottom: 18, color: "#999", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#c8a84b"}
                  onMouseLeave={e => e.currentTarget.style.color = "#999"}>
                  <span>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "#666", marginBottom: 2 }}>{item.label}</div>
                    <div>{item.val}</div>
                  </div>
                </a>
              ))}
              <Link to="/contact" style={{ display: "block", marginTop: 24 }}>
                <button className="btn-gold" style={{ border: "none", width: "100%", textAlign: "center" }}>Get a Quote</button>
              </Link>
            </div>

            {/* Other Services */}
            <div style={{ background: "#f8f8f8", padding: 32 }}>
              <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: "#0a0a1e", marginBottom: 20, letterSpacing: 1, textTransform: "uppercase" }}>
                Other Services
              </h3>
              {otherServices.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`}
                  style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 0", borderBottom: "1px solid #e8e8e8", color: "#555", fontSize: 13, transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#c8a84b"}
                  onMouseLeave={e => e.currentTarget.style.color = "#555"}>
                  <span style={{ fontSize: 20 }}>{s.icon}</span>
                  <span style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>{s.title}</span>
                  <span style={{ marginLeft: "auto" }}>→</span>
                </Link>
              ))}
              <Link to="/services" style={{ display: "block", marginTop: 20, color: "#c8a84b", fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
