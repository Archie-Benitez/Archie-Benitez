import { obsessions } from "../data/portfolio"

export default function Obsessions() {
  return (
    <section>
      <div className="sec-label">Obsessions</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".45rem" }}>
        {obsessions.map((item) => (
              <div
                key={item.label}
                style={{ background: "var(--p-card)", border: "1px solid var(--p-border)", borderRadius: 8, padding: ".65rem .8rem", display: "flex", alignItems: "center", gap: ".6rem", transition: "all .18s", cursor: "default", color: "inherit" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "var(--cream-2)"; el.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.background = "var(--p-card)"; el.style.transform = "translateY(0)"; }}
              >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-soft)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
              <path d={item.icon} />
            </svg>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-soft)" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
