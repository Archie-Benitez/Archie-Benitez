import { useNavigate } from "react-router-dom"
import { certifications } from "../data/portfolio"

const ExternalLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

export default function RecentCerts() {
  const navigate = useNavigate()

  return (
    <section id="certs">
      <div className="sec-label">
        Recent Certifications
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); navigate("/certificates") }}
          style={{ fontSize: 10, fontWeight: 600, color: "var(--p-accent)", textDecoration: "none", letterSpacing: ".05em", marginLeft: ".25rem" }}
        >
          View All →
        </a>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: ".55rem" }}>
        {certifications.slice(0, 3).map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: ".8rem", padding: ".8rem 1rem", background: "var(--p-card)", border: "1px solid var(--p-border)", borderRadius: 8, boxShadow: "var(--shadow-sm)", textDecoration: "none", color: "inherit", transition: "all .18s" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--p-accent)"; el.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--p-border)"; el.style.transform = "translateY(0)"; }}
          >
            <div style={{ width: 34, height: 34, borderRadius: 7, background: "var(--p-accent-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0 }}>
              {cert.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{cert.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--ink-muted)" }}>{cert.issuer}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: ".4rem", flexShrink: 0 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "var(--ink-muted)" }}>{cert.year}</span>
              <span style={{ color: "var(--p-accent)" }}><ExternalLinkIcon /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
