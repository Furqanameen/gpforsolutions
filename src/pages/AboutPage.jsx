import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../data/siteData";

export default function AboutPage() {
  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url(https://www.dailypaws.com/thmb/tPp09IaFqROIjKX9KZcgAva88s4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/german-shepherd-k9-177744826-2000-f2a655647fdd4949bbd2953577df5f08.jpg)" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div style={{ width: 48, height: 2, background: "#c8a84b", margin: "0 auto 20px" }} />
          <h1>About Us</h1>
          <p>Bespoke security solutions in the UK</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* WELCOME */}
      <section style={{ padding: "90px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
            <div>
              <span className="section-tag">Welcome</span>
              <h2 className="section-title">Welcome to Garrison Apex Forte Solutions Ltd</h2>
              <div className="section-divider" />
              <p style={{ color: "#555", lineHeight: 1.9, marginBottom: 20, fontSize: 14 }}>
                Where safety and security find their ultimate home. At Garrison Apex Forte Solutions Ltd, we are dedicated to providing bespoke security solutions in the UK.
              </p>
              <p style={{ color: "#555", lineHeight: 1.9, marginBottom: 32, fontSize: 14 }}>
                At GPForSolutions, we are dedicated to being the aggressive partner you need in security. We go beyond industry norms, fostering trust and embracing cutting-edge techniques to deliver protection that surpasses your expectations.
              </p>
              <Link to="/contact"><button className="btn-gold" style={{ border: "none" }}>Get In Touch</button></Link>
            </div>
            <div style={{ position: "relative" }}>
              <img src="https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&q=80"
                alt="Garrison Apex Forte Solutions Ltd" style={{ width: "100%", objectFit: "contain", maxHeight: 420, display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section style={{ padding: "80px 8%", background: "#f8f8f8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-tag" style={{ display: "block" }}>Who We Serve</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Our Clients</h2>
            <div className="section-divider centered" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 28 }}>
            {[
              {
                icon: "🏢",
                title: "Business",
                desc: "Businesses of all sizes, including retail establishments and corporate offices, can trust us to fortify their workplaces, enabling uninterrupted operations and safeguarding their assets.",
              },
              {
                icon: "🏫",
                title: "Educational Institutes",
                desc: "Educational institutions, government agencies, and non-profit organizations are welcomed with open arms, as we strive to create safe and nurturing environments for you to thrive in your respective missions.",
              },
              {
                icon: "🎪",
                title: "Events",
                desc: "If you're organizing an event, rest assured that our custom security plans will keep your gathering safe and secure, allowing you to focus on creating memorable experiences for your attendees.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff", padding: "40px 32px", borderTop: "3px solid #c8a84b", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ fontSize: 40, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 17, color: "#0a0a1e", marginBottom: 14 }}>{item.title}</h3>
                <p style={{ color: "#777", fontSize: 13, lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section style={{ padding: "90px 8%", background: "#0a0a1e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-tag" style={{ display: "block" }}>What Drives Us</span>
            <h2 className="section-title light" style={{ textAlign: "center" }}>Our Core Principles</h2>
            <div className="section-divider centered" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
            {[
              {
                icon: "🎯",
                title: "Vision",
                desc: "Garrison Apex Forte Solutions Ltd envisions a future where elegance and unwavering security converge. We strive to redefine protection in the UK by setting new standards of excellence.",
              },
              {
                icon: "💎",
                title: "Values",
                desc: "We adopt an aggressive attitude towards security, fearlessly facing challenges to provide unmatched protection. Our commitment to excellence, transparency, and trust ensures uncompromising safety.",
              },
              {
                icon: "🚀",
                title: "Mission",
                desc: "We are dedicated to providing bespoke security solutions in the UK. With a focus on excellence, innovation, and integrity, we aim to safeguard our clients' interests.",
              },
            ].map(item => (
              <div key={item.title} style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                padding: "40px 32px", transition: "border-color 0.3s, background 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a84b"; e.currentTarget.style.background = "rgba(200,168,75,0.05)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}>
                <div style={{ fontSize: 36, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 16 }}>{item.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section style={{ padding: "90px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-tag" style={{ display: "block" }}>Get In Touch</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>How Can We Help?</h2>
            <div className="section-divider centered" />
            <p style={{ color: "#888", fontSize: 14, maxWidth: 500, margin: "0 auto" }}>
              Talk to one of our consultants today and learn how to get our services.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 28 }}>
            {[
              {
                icon: "📞",
                title: CONTACT_INFO.phone2,
                sub: "Call Us",
                desc: "We answer by phone from Monday to Saturday from 10 am until 6 pm.",
                href: `tel:${CONTACT_INFO.phone2}`,
              },
              {
                icon: "✉️",
                title: CONTACT_INFO.email2,
                sub: "Email Us",
                desc: "We will respond to your email within 8 hours on business days.",
                href: `mailto:${CONTACT_INFO.email2}`,
              },
              {
                icon: "📍",
                title: CONTACT_INFO.address,
                sub: "Visit Us",
                desc: "Come visit us from Monday to Friday from 11 am to 4 pm.",
                href: "https://www.google.com/maps?q=2+Gainsborough+Road+London+E11+1HT",
              },
            ].map(item => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer"
                style={{ textDecoration: "none", display: "block" }}>
                <div style={{
                  background: "#f8f8f8", padding: "40px 32px", textAlign: "center",
                  borderBottom: "3px solid transparent",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#0a0a1e"; e.currentTarget.style.borderBottomColor = "#c8a84b"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#f8f8f8"; e.currentTarget.style.borderBottomColor = "transparent"; }}>
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#c8a84b", marginBottom: 10 }}>{item.sub}</div>
                  <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 15, color: "#0a0a1e", marginBottom: 12, wordBreak: "break-word" }}>{item.title}</h3>
                  <p style={{ color: "#777", fontSize: 13, lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
