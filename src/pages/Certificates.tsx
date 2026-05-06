import { useNavigate } from "react-router-dom"
import { certifications } from "../data/portfolio"

const ExternalLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function Certificates() {
  const navigate = useNavigate()

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
      <button
        onClick={() => navigate(-1)}
        style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", padding: ".45rem .9rem", borderRadius: 7, background: "var(--p-card)", color: "var(--ink-soft)", border: "1px solid var(--p-border)", cursor: "pointer", fontSize: 12, fontWeight: 600, marginBottom: "2rem", fontFamily: "'Outfit', sans-serif" }}
      >
        ← Back
      </button>

      <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-.03em", marginBottom: ".4rem" }}>
        All Certifications
      </h1>
      <p style={{ fontSize: 14, color: "var(--ink-muted)", marginBottom: "2rem", fontFamily: "'JetBrains Mono', monospace", fontStyle: "italic" }}>
        // Proof of work. More coming.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.1rem 1.25rem", background: "var(--p-card)", border: "1px solid var(--p-border)", borderRadius: 12, boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit", transition: "all .18s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--p-accent)"; el.style.transform = "translateY(-1px)"; el.style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--p-border)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "var(--shadow-sm)"; }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--p-accent-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
              {cert.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: ".2rem" }}>{cert.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, color: "var(--ink-muted)" }}>{cert.issuer}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".5rem", flexShrink: 0 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "var(--ink-muted)", background: "var(--cream-2)", padding: ".2rem .55rem", borderRadius: 6, border: "1px solid var(--p-border)" }}>{cert.year}</span>
              <span style={{ color: "var(--p-accent)" }}><ExternalLinkIcon /></span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
