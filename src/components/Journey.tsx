import { journey } from "../data/portfolio"

export default function Journey() {
  return (
    <section id="journey">
      <div className="sec-label">Journey</div>
      <div className="p-card">
        <div className="timeline">
          {journey.map((item, i) => (
            <div key={i} style={{ position: "relative", marginBottom: i < journey.length - 1 ? "1.35rem" : 0 }}>
              <div className={`t-dot ${item.active ? "active" : ""}`} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "var(--p-accent)", fontWeight: 600, letterSpacing: ".04em", marginBottom: ".15rem" }}>
                {item.year}
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>{item.title}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-muted)", lineHeight: 1.6, marginTop: ".25rem" }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
