import { useNavigate } from "react-router-dom"
import { projects, type ProjectStatus } from "../data/portfolio"

const pillClass: Record<ProjectStatus, string> = { live: "pill pill-live", wip: "pill pill-wip", built: "pill pill-built" }
const pillLabel: Record<ProjectStatus, string> = { live: "Live", wip: "In Progress", built: "Built / Pending" }

export default function Projects() {
  const navigate = useNavigate()
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
      <button onClick={() => navigate(-1)} style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", padding: ".45rem .9rem", borderRadius: 7, background: "var(--p-card)", color: "var(--ink-soft)", border: "1px solid var(--p-border)", cursor: "pointer", fontSize: 12, fontWeight: 600, marginBottom: "2rem" }}>← Back</button>
      <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-.03em", marginBottom: ".4rem" }}>All Projects</h1>
      <p style={{ fontSize: 14, color: "var(--ink-muted)", marginBottom: "2rem", fontFamily: "'JetBrains Mono', monospace", fontStyle: "italic" }}>// Things I've built, am building, or experimented with.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
        {projects.map((project) => (
          <div key={project.id} className="p-card" style={{ cursor: "pointer", transition: "all .2s" }} onClick={() => navigate(`/projects/${project.id}`)}
            onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "var(--shadow-md)"; el.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.boxShadow = "var(--shadow-sm)"; el.style.transform = "translateY(0)"; }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: ".75rem" }}
              />
            ) : (
              <div style={{ width: "100%", height: 160, background: "#1e1e1e", borderRadius: 8, marginBottom: ".75rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                {project.emoji}
              </div>
            )}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: ".5rem", marginBottom: ".45rem" }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)" }}>{project.name}</div>
              <span className={pillClass[project.status]}>{pillLabel[project.status]}</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--ink-muted)", lineHeight: 1.6, marginBottom: ".85rem" }}>{project.shortDesc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".3rem" }}>
              {project.stack.slice(0, 4).map((t) => <span key={t} style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", background: "var(--cream-2)", color: "var(--ink-soft)", padding: ".18rem .48rem", borderRadius: 4, border: "1px solid var(--p-border)" }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
