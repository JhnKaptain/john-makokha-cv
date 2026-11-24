import React, { useState } from "react";
import { profile, summary, education, skills, work, referees } from "./data";
import "./styles.css";

function Logo({ src, alt }) {
  // No picture yet: show the initials (e.g. "GDC" from "... (GDC)").
  const initials = (/\(([A-Z]{2,5})\)/.exec(alt) || [])[1] ||
    alt.split(/\s+/).filter(w => /^[A-Z]/.test(w)).slice(0, 3).map(w => w[0]).join("");
  return (
    <div className="logo-wrap" title={alt}>
      {src ? <img src={src} alt={alt} className="logo-img" loading="lazy" />
        : <span className="logo-initials">{initials}</span>}
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="section" id={id}>
      <h3 className="section-title">{title}</h3>
      <div>{children}</div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-brand">{profile.name}</div>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}>
          <a href="#summary">Summary</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#referees">Referees</a>
          <a href={profile.cv} download="John_Makokha_CV.pdf">
            Download CV
          </a>
        </div>
      </nav>

      <div className="container card">
        <aside className="sidebar">
          <img className="profile-photo" src={profile.photo} alt={profile.name} />
          <h1 className="name">{profile.name}</h1>
          <p className="title">{profile.title}</p>
          <p className="tagline">
            {summary.split(".").slice(0, 2).join(".") + "."}
          </p>

          <div className="contact">
            <a href={`tel:${profile.phone}`} className="contact-line">
              📞 {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="contact-line">
              ✉️ {profile.email}
            </a>
          </div>

          <div className="cta">
            <a className="btn primary" href={profile.cv} download="John_Makokha_CV.pdf">
              Download CV (PDF)
            </a>
            <a className="btn-link" href={profile.cvWord} download="John_Makokha_CV.docx">
              or Word version
            </a>
          </div>
        </aside>

        <main className="main">
          <Section title="Career Profile Summary" id="summary">
            <p className="lead">{summary}</p>
          </Section>

          <Section title="Education" id="education">
            {education.map((e, i) => (
              <div key={i} className="edu-row">
                <Logo src={e.logo} alt={e.school} />
                <div className="edu-text">
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school">
                    {e.school} — {e.location}
                  </div>
                </div>
              </div>
            ))}
          </Section>

          <Section title="Key Skills & Competencies" id="skills">
            <ul className="bullets">
              {skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </Section>

          <Section title="Work History" id="work">
            {work.map((w, i) => (
              <div key={i} className="job">
                <div className="job-head">
                  <div className="job-role">
                    {w.role} — <strong>{w.company}</strong>
                  </div>
                  <div className="job-period">{w.period}</div>
                </div>
                <div className="job-body">
                  <Logo src={w.logo} alt={w.company} />
                  <ul className="bullets job-bullets">
                    {w.bullets.map((b, bi) => (
                      <li key={bi}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Section>

          <Section title="Referees" id="referees">
            <div className="refs">
              {referees.map((r, i) => (
                <div key={i} className="ref">
                  <div className="ref-name">{r.name}</div>
                  <div className="ref-role">{r.role}</div>
                  <div className="ref-phone">{r.phone}</div>
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>

      {/* Sticky Footer */}
      <footer className="footer">
        <a href={`tel:${profile.phone}`} className="footer-link">📞 Call</a>
        <a
          href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
        <a href={`mailto:${profile.email}`} className="footer-link">✉️ Email</a>
      </footer>
    </div>
  );
}
