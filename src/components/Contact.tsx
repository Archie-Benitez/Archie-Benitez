import { personal } from "../data/portfolio"

const contacts = [
  { icon: "✉", label: "Email", sub: personal.email, href: `mailto:${personal.email}` },
  { icon: "💼", label: "LinkedIn", sub: "archie-benitez-916b08247", href: personal.linkedin },
  { icon: "💬", label: "WhatsApp", sub: "+974 3108 1172", href: personal.whatsapp },
  { icon: "⚡", label: "GitHub", sub: "View repositories", href: personal.github },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="sec-label">Contact</div>
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".55rem" }}>
        {contacts.map((c) => (
          <a key={c.label} href={c.href} target={c.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="contact-item">
            <div style={{ width: 30, height: 30, borderRadius: 6, background: "var(--cream-2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{c.icon}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{c.label}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: "var(--ink-muted)", marginTop: 1 }}>{c.sub}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
