import { useState } from "react";
import { Link } from "react-router-dom";
import { CONTACT_INFO } from "../data/siteData";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url(https://t4.ftcdn.net/jpg/03/73/16/61/360_F_373166103_RCT06iM4jaV5ZAmBArbKpIQXRe2ay3aG.jpg)" }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <div style={{ width: 48, height: 2, background: "#c8a84b", margin: "0 auto 20px" }} />
          <h1>Contact Us</h1>
          <p>Get in touch with our security consultants today.</p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* HOW CAN WE HELP */}
      <section style={{ padding: "90px 8%", background: "#f8f8f8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-tag" style={{ display: "block" }}>Reach Out</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>How Can We Help?</h2>
            <div className="section-divider centered" />
            <p style={{ color: "#888", fontSize: 14 }}>Talk to one of our consultants today and learn how to get our services.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              {
                icon: "📞",
                title: CONTACT_INFO.phone2,
                subtitle: "Phone",
                desc: "We answer by phone from Monday to Saturday from 10 am until 6 pm.",
                href: `tel:${CONTACT_INFO.phone2}`,
                cta: "Call Now",
              },
              {
                icon: "✉️",
                title: CONTACT_INFO.email2,
                subtitle: "Email",
                desc: "We will respond to your email within 8 hours on business days.",
                href: `mailto:${CONTACT_INFO.email2}`,
                cta: "Send Email",
              },
              {
                icon: "📍",
                title: CONTACT_INFO.address,
                subtitle: "Address",
                desc: "Come visit us from Monday to Friday from 11 am to 4 pm.",
                href: "https://www.google.com/maps?q=2+Gainsborough+Road+London+E11+1HT",
                cta: "Get Directions",
              },
            ].map(item => (
              <div key={item.title} style={{ background: "#fff", padding: "44px 32px", textAlign: "center", borderBottom: "3px solid #c8a84b", boxShadow: "0 4px 24px rgba(0,0,0,0.05)", transition: "transform 0.3s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-6px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ width: 70, height: 70, background: "#0a0a1e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 20px" }}>
                  {item.icon}
                </div>
                <div style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "#c8a84b", marginBottom: 10 }}>{item.subtitle}</div>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: "#0a0a1e", marginBottom: 14, wordBreak: "break-word" }}>{item.title}</h3>
                <p style={{ color: "#888", fontSize: 13, lineHeight: 1.8, marginBottom: 20 }}>{item.desc}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <button className="btn-outline-gold" style={{ fontSize: 11, padding: "10px 24px" }}>{item.cta}</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section style={{ padding: "90px 8%", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }} className="grid-2">
          {/* Form */}
          <div>
            <span className="section-tag">Send a Message</span>
            <h2 className="section-title">Let's Talk?</h2>
            <div className="section-divider" />
            <p style={{ color: "#666", lineHeight: 1.9, marginBottom: 36, fontSize: 14 }}>
              Talk to one of our consultants today and learn how to get our services. We'll get back to you as soon as possible.
            </p>

            {sent ? (
              <div style={{ background: "#f0fff4", border: "2px solid #c8a84b", padding: "48px 40px", textAlign: "center" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontFamily: "'Montserrat',sans-serif", color: "#0a0a1e", marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: "#666", marginBottom: 24 }}>Your message was sent successfully. Thanks.</p>
                <button className="btn-gold" style={{ border: "none", cursor: "pointer" }} onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <input placeholder="Your Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <input placeholder="Email Address *" type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="form-group">
                  <input placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message *" rows={6} required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="btn-gold" style={{ border: "none", cursor: "pointer" }}>Send Message →</button>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div>
            <span className="section-tag">Find Us</span>
            <h2 className="section-title">Our Location</h2>
            <div className="section-divider" />

            {/* Google Map embed */}
            <div style={{ marginBottom: 32, borderRadius: 2, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
              <iframe
                title="Garrison Apex Forte Solutions Ltd Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9942.28!2d0.2167!3d51.5042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a6e16ce1e4df%3A0x5a4e1f2a3b4c5d6e!2sEssex%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%" height="280" style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div style={{ background: "#f8f8f8", padding: "28px 32px" }}>
              <h4 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 14, color: "#0a0a1e", marginBottom: 20, letterSpacing: 1, textTransform: "uppercase" }}>
                Office Hours
              </h4>
              {[
                { day: "Monday – Saturday", time: "10:00 AM – 6:00 PM", type: "Phone" },
                { day: "Monday – Friday", time: "11:00 AM – 4:00 PM", type: "In-Person" },
                { day: "24/7", time: "Always Available", type: "Emergency" },
              ].map(item => (
                <div key={item.type} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: "1px solid #e8e8e8" }}>
                  <div>
                    <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: "#0a0a1e" }}>{item.type}</div>
                    <div style={{ fontSize: 12, color: "#888", marginTop: 2 }}>{item.day}</div>
                  </div>
                  <div style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 700, fontSize: 12, color: "#c8a84b" }}>{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: "70px 8%", background: "#0a0a1e", textAlign: "center" }}>
        <div style={{ maxWidth: 650, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "#fff", marginBottom: 16 }}>
            Need Immediate Assistance?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 32 }}>
            Our team is available around the clock for emergency security requirements.
          </p>
          <a href={`tel:${CONTACT_INFO.phone}`}>
            <button className="btn-gold" style={{ border: "none", fontSize: 14 }}>📞 {CONTACT_INFO.phone}</button>
          </a>
        </div>
      </section>
    </div>
  );
}
