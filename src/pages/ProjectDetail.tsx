import { useParams, useNavigate } from "react-router-dom"
import { projects, type ProjectStatus } from "../data/portfolio"

const pillClass: Record<ProjectStatus, string> = { live: "pill pill-live", wip: "pill pill-wip", built: "pill pill-built" }
const pillLabel: Record<ProjectStatus, string> = { live: "Live", wip: "In Progress", built: "Built / Pending" }

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) return (
    <div style={{ maxWidth: 600, margin: "6rem auto", padding: "0 1.25rem", textAlign: "center" }}>
      <div style={{ fontSize: 48, marginBottom: "1rem" }}>🔍</div>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: ".5rem" }}>Project not found</h1>
      <button onClick={() => navigate(-1)} style={{ padding: ".6rem 1.2rem", borderRadius: 7, background: "var(--ink)", color: "var(--cream)", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 13, marginTop: "1rem" }}>← Back Home</button>
    </div>
  )

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
      <button onClick={() => navigate(-1)} style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", padding: ".45rem .9rem", borderRadius: 7, background: "var(--p-card)", color: "var(--ink-soft)", border: "1px solid var(--p-border)", cursor: "pointer", fontSize: 12, fontWeight: 600, marginBottom: "2rem" }}>← Back</button>
      <div style={{ width: "100%", height: 280, background: "#1e1e1e", borderRadius: 16, marginBottom: "2rem", border: "1px solid #333", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 72 }}>
        {project.image ? (
          <img src={project.image} alt={project.name} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
        ) : (
          project.emoji
        )}
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-.03em", lineHeight: 1.1, marginBottom: ".5rem" }}>{project.name}</h1>
      <span className={pillClass[project.status]} style={{ marginBottom: "1.5rem", display: "inline-block" }}>{pillLabel[project.status]}</span>
      <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.78, marginBottom: "2rem", marginTop: ".85rem" }}>{project.fullDesc}</p>
      <div className="p-card" style={{ marginBottom: "1.5rem" }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: ".65rem" }}>Tech Stack</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem" }}>
          {project.stack.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>
      </div>
      <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
        {project.links.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: ".6rem 1.2rem", borderRadius: 7, fontSize: 13, fontWeight: 600, textDecoration: "none", background: "var(--ink)", color: "var(--cream)" }}>{link.label}</a>)}
      </div>
    </div>
  )
}
