import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HERO_SLIDES, SERVICES, CONTACT_INFO } from "../data/siteData";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };
  if (sent) return (
    <div style={{ textAlign: "center", padding: "60px 20px", background: "#fff" }}>
      <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
      <h3 style={{ fontFamily: "'Montserrat',sans-serif", color: "#0a0a1e", marginBottom: 8 }}>Message Sent!</h3>
      <p style={{ color: "#666" }}>Your message was sent successfully. Thanks.</p>
      <button className="btn-gold" style={{ marginTop: 24, border: "none" }} onClick={() => setSent(false)}>Send Another</button>
    </div>
  );
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group"><input placeholder="Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></div>
      <div className="form-group"><input placeholder="Email *" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
      <div className="form-group"><input placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} /></div>
      <div className="form-group"><textarea placeholder="Message *" required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></div>
      <button type="submit" className="btn-gold" style={{ border: "none", cursor: "pointer" }}>Send Message</button>
    </form>
  );
}

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlide(s => (s + 1) % HERO_SLIDES.length);
      setAnimKey(k => k + 1);
    }, 5500);
    return () => clearInterval(t);
  }, []);

  const cur = HERO_SLIDES[slide];

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div key={animKey} style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${cur.bg})`,
          backgroundSize: "cover", backgroundPosition: "center",
          animation: "kenBurns 6s ease forwards",
        }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,30,0.88) 0%, rgba(10,10,30,0.55) 60%, transparent 100%)" }} />

        <div key={`content-${animKey}`} style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", alignItems: "center", padding: "0 8%",
          animation: "fadeInUp 0.9s ease",
        }}>
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ width: 48, height: 2, background: "#c8a84b" }} />
              <span style={{ color: "#c8a84b", fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
                Garrison Apex Forte Solutions Ltd
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem,5.5vw,4.2rem)", color: "#fff", fontWeight: 900, lineHeight: 1.1, marginBottom: 20, fontFamily: "'Montserrat',sans-serif" }}>
              {cur.title}
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.78)", marginBottom: 40, lineHeight: 1.8, maxWidth: 560 }}>
              {cur.subtitle}
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/contact"><button className="btn-gold" style={{ border: "none" }}>Contact Us</button></Link>
              <Link to="/services"><button className="btn-outline-white">Our Services</button></Link>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 3 }}>
          {HERO_SLIDES.map((_, i) => (
            <button key={i} onClick={() => { setSlide(i); setAnimKey(k => k + 1); }} style={{
              width: i === slide ? 32 : 10, height: 10, borderRadius: 5,
              background: i === slide ? "#c8a84b" : "rgba(255,255,255,0.35)",
              border: "none", cursor: "pointer", transition: "all 0.35s",
            }} />
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, right: "5%", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontFamily: "'Montserrat',sans-serif", letterSpacing: 3, textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "rgba(255,255,255,0.2)" }} />
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ padding: "100px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          {/* Images */}
          <div style={{ position: "relative" }}>
            <img src="http://k9securityspot.com/wp-content/uploads/2023/08/WhatsApp_Image_2023-08-15_at_18.08.08-removebg-preview.png"
              alt="Security Dog" style={{ width: "65%", display: "block", borderRadius: 2, boxShadow: "0 25px 70px rgba(0,0,0,0.15)" }} />
            <img src="https://k9securityspot.co.uk/wp-content/uploads/2023/08/1-removebg-preview.png"
              alt="Security Team" style={{
                width: "48%", position: "absolute", bottom: -40, right: 0,
                borderRadius: 2, boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                border: "6px solid #fff",
              }} />
            <div style={{ position: "absolute", top: -20, left: -20, width: 80, height: 80, border: "3px solid #c8a84b", zIndex: -1 }} />
          </div>

          {/* Text */}
          <div>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">About Us</h2>
            <div className="section-divider" />
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 28, fontSize: 14 }}>
              At Garrison Apex Forte Solutions Ltd, we are dedicated to providing bespoke security solutions in the UK. With a focus on excellence, innovation, and integrity, we aim to safeguard our clients' interests.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 36 }}>
              {[
                { title: "Quality", desc: "Excellence in every security solution we deliver." },
                { title: "Experience", desc: "Years of proven expertise across the UK." },
                { title: "Tradition", desc: "Redefining protection with new standards." },
                { title: "Innovation", desc: "Security that surpasses expectations." },
              ].map(item => (
                <div key={item.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, background: "#c8a84b", borderRadius: "50%", marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 13, color: "#0a0a1e", marginBottom: 4 }}>{item.title}</h4>
                    <p style={{ fontSize: 12, color: "#888", lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about"><button className="btn-gold" style={{ border: "none" }}>Learn More</button></Link>
          </div>
        </div>
      </section>

      {/* DARK VISION STRIP */}
      <section style={{ padding: "90px 8%", background: "#0a0a1e", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 400, height: 400, background: "radial-gradient(circle, rgba(200,168,75,0.06) 0%, transparent 70%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div>
            <span className="section-tag">Our Vision</span>
            <h2 className="section-title light">Elevating Protection, Empowering Peace</h2>
            <div className="section-divider" />
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 20, fontSize: 14 }}>
              Get to know a little of our history and the road we travelled that took us to the level we are today.
            </p>
            <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.9, fontSize: 14 }}>
              We strive to redefine protection in the UK by setting new standards of excellence, fostering trust through transparent practices, and contributing to a harmonious world where our teams and clients thrive together.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {[
              { num: "100%", label: "Reliability" },
              { num: "100%", label: "Quality" },
              { num: "6+", label: "Years Experience" },
              { num: "24/7", label: "Availability" },
            ].map(stat => (
              <div key={stat.label} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", padding: "36px 24px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: "2.4rem", fontWeight: 900, color: "#c8a84b", marginBottom: 8 }}>{stat.num}</div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "100px 8%", background: "#f8f8f8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-tag" style={{ display: "block" }}>What We Offer</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Our Services</h2>
            <div className="section-divider centered" />
            <p style={{ color: "#888", fontSize: 14, maxWidth: 500, margin: "0 auto" }}>Focused on results we seek to raise the level of our customers.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 24 }}>
            {SERVICES.map(s => (
              <Link key={s.slug} to={`/services/${s.slug}`} style={{ textDecoration: "none" }}>
                <div className="service-card">
                  <div className="service-card-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div style={{ marginTop: 20, color: "#c8a84b", fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/services"><button className="btn-outline-gold">View All Services</button></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: "90px 8%", background: "#0a0a1e" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <span className="section-tag" style={{ display: "block" }}>Why Us</span>
          <h2 className="section-title light" style={{ textAlign: "center" }}>Why Choose Garrison Apex Forte Solutions Ltd?</h2>
          <div className="section-divider centered" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 2, marginTop: 48 }}>
            {[
              { icon: "🛡️", title: "SIA Approved", desc: "We are an SIA Approved Contractor for the provision of Security Guarding." },
              { icon: "🌍", title: "Nationwide", desc: "Head office in Essex with regional offices in London, Birmingham & Hampshire." },
              { icon: "⏰", title: "24/7 Service", desc: "Round-the-clock security services available whenever you need us." },
              { icon: "🏆", title: "NASDU Certified", desc: "All our security teams hold NASDU L2 qualifications, the highest industry standard." },
            ].map(item => (
              <div key={item.title} className="info-card">
                <div className="info-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "100px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }} className="grid-2">
          <div>
            <span className="section-tag">Reach Out</span>
            <h2 className="section-title">Let's Talk?</h2>
            <div className="section-divider" />
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 40, fontSize: 14 }}>
              Talk to one of our consultants today and learn how to start leveraging your business.
            </p>
            {[
              { icon: "📞", label: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}`, sub: "Mon–Sat: 10am – 6pm" },
              { icon: "✉️", label: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}`, sub: "Reply within 8 hours" },
              { icon: "📍", label: CONTACT_INFO.city, href: "https://www.google.com/maps?q=2+Gainsborough+Road+London+E11+1HT", sub: "Mon–Fri: 11am – 4pm" },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 28, color: "#333", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#c8a84b"}
                onMouseLeave={e => e.currentTarget.style.color = "#333"}>
                <div style={{ width: 48, height: 48, background: "#0a0a1e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0, transition: "background 0.3s" }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: 12, color: "#999" }}>{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ background: "#f8f8f8", padding: 40 }}>
            <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 18, marginBottom: 24, color: "#0a0a1e" }}>Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
