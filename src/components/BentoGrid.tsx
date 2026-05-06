import { personal, projects } from "../data/portfolio"

export default function BentoGrid() {
  const featured = projects[0]
  return (
    <section>
      <div className="sec-label">Quick Info</div>
      <div className="bento-grid">
        {/* Featured Project — wide dark cell */}
        <div
          className="bento-cell dark wide"
          style={{ cursor: "pointer", padding: "1.5rem" }}
          onClick={() => window.location.href = `/projects/${featured.id}`}
        >
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "#777",
            marginBottom: ".75rem",
          }}>
            Featured Project
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: ".875rem" }}>
            <span style={{ fontSize: 34, lineHeight: 1 }}>{featured.emoji}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                marginBottom: ".25rem",
                letterSpacing: "-0.01em",
              }}>
                {featured.name}
              </div>
              <div style={{
                fontSize: 12,
                color: "#999",
                lineHeight: 1.5,
              }}>
                {featured.shortDesc}
              </div>
            </div>
          </div>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".35rem",
            marginTop: "1rem",
          }}>
            {featured.stack.slice(0, 4).map((t) => (
              <span key={t} style={{
                fontSize: 10.5,
                fontFamily: "'JetBrains Mono', monospace",
                background: "rgba(255,255,255,.07)",
                color: "#bbb",
                padding: ".22rem .55rem",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,.08)",
                transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.12)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,.15)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
                e.currentTarget.style.color = "#bbb";
              }}
              >
                {t}
              </span>
            ))}
          </div>

          <div style={{
            marginTop: "1rem",
            fontSize: 12,
            color: "var(--p-accent)",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 500,
            transition: "color 0.2s cubic-bezier(0.4,0,0.2,1)",
          }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
            }}>
              View project
              <span style={{
                transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
                display: "inline-block",
              }}
              className="arrow-icon"
              >→</span>
            </span>
          </div>
        </div>

        {/* Status */}
        <div className="bento-cell" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginBottom: ".6rem",
          }}>
            Status
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: ".45rem",
            fontSize: 13,
            fontWeight: 600,
            color: "#1a8a5a",
          }}>
            <span style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#1a8a5a",
              display: "inline-block",
              boxShadow: "0 0 0 2.5px rgba(26, 138, 90, 0.12)",
            }} className="animate-blink" />
            Open to Roles
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            color: "var(--ink-faint)",
            marginTop: ".25rem",
          }}>
            Qatar · Remote
          </div>
        </div>

        {/* Based in */}
        <div className="bento-cell" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginBottom: ".6rem",
          }}>
            Based in
          </div>
          <div style={{
            fontSize: 14,
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
          }}>
            Doha, Qatar
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            color: "var(--ink-faint)",
            marginTop: ".25rem",
          }}>
            Filipino · OFW
          </div>
        </div>

        {/* Primary Stack */}
        <div className="bento-cell" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginBottom: ".6rem",
          }}>
            Primary Stack
          </div>
          <div style={{
            fontSize: 14,
            fontWeight: 700,
            color: "var(--p-accent)",
            letterSpacing: "-0.01em",
          }}>
            {personal.primaryStack}
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            color: "var(--ink-faint)",
            marginTop: ".25rem",
          }}>
            Mastering now
          </div>
        </div>

        {/* Builds With */}
        <div className="bento-cell" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--ink-faint)",
            marginBottom: ".6rem",
          }}>
            Builds With
          </div>
          <div style={{
            fontSize: 14,
            fontWeight: 600,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
          }}>
            AI-assisted
          </div>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            color: "var(--ink-faint)",
            marginTop: ".25rem",
          }}>
            Claude · Antigravity · Copilot
          </div>
        </div>
      </div>
    </section>
  )
}