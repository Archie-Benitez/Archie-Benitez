import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { projects, type Project, type ProjectStatus } from "../data/portfolio"

const pillClass: Record<ProjectStatus, string> = { live: "pill pill-live", wip: "pill pill-wip", built: "pill pill-built" }
const pillLabel: Record<ProjectStatus, string> = { live: "Live", wip: "In Progress", built: "Built / Pending" }

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{ position: "fixed", inset: 0, background: "rgba(24,22,18,.6)", backdropFilter: "blur(6px)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      className="modal-overlay"
    >
      <div className="modal-box" style={{ background: "var(--p-card)", borderRadius: 16, maxWidth: 560, width: "100%", maxHeight: "90vh", overflowY: "auto", boxShadow: "var(--shadow-lg)", border: "1px solid var(--p-border)" }}>
        <div style={{ width: "100%", height: 200, background: "#1e1e1e", borderRadius: "12px 12px 0 0", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>
          {project.image ? (
            <img src={project.image} alt={project.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
          ) : (
            project.icon ? (
              <img src={project.icon} alt={project.name} style={{ position: "relative", zIndex: 1, width: 72, height: 72, objectFit: "contain" }} />
            ) : (
              <span style={{ position: "relative", zIndex: 1 }}>{project.emoji}</span>
            )
          )}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              width: 32, height: 32, borderRadius: "50%",
              background: "rgba(0,0,0,.5)",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(255,255,255,.2)",
              cursor: "pointer", fontSize: 14, color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              zIndex: 10,
            }}
            >
            ✕
          </button>
        </div>
        <div style={{ padding: "1.5rem" }}>
          <div style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-.02em", marginBottom: ".35rem" }}>{project.name}</div>
          <span className={pillClass[project.status]} style={{ marginBottom: ".85rem", display: "inline-block" }}>{pillLabel[project.status]}</span>
          <p style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.72, margin: ".85rem 0 1rem" }}>{project.fullDesc}</p>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: ".4rem" }}>Tech Stack</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem", marginBottom: "1.25rem" }}>
            {project.stack.map((t) => <span key={t} style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", background: "var(--cream-2)", color: "var(--ink-soft)", padding: ".25rem .55rem", borderRadius: 5, border: "1px solid var(--p-border)" }}>{t}</span>)}
          </div>
          <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
            {project.links.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: ".55rem 1.1rem", borderRadius: 7, fontSize: 13, fontWeight: 600, textDecoration: "none", background: "var(--ink)", color: "var(--cream)" }}>{link.label}</a>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectGrid() {
  const [activeModal, setActiveModal] = useState<Project | null>(null)
  const navigate = useNavigate()

  const recentProjects = projects.slice(-4).reverse()

  return (
    <section id="projects">
      <div className="sec-label">
        Recent Projects
        <a href="#" onClick={(e) => { e.preventDefault(); navigate("/projects") }} style={{ fontSize: 10, fontWeight: 600, color: "var(--p-accent)", textDecoration: "none", letterSpacing: ".05em", marginLeft: ".25rem" }}>View All →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".75rem" }}>
        {recentProjects.map((project) => (
          <div key={project.id} className="flip-wrap" style={{ height: 210 }} onClick={() => setActiveModal(project)}>
            <div className="flip-inner">
              <div className="flip-front">
                {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                  />
                  ) : (
                <div className="flip-placeholder">
                  {project.icon ? (
                    <img src={project.icon} alt={project.name} style={{ width: 48, height: 48, objectFit: "contain" }} />
                  ) : (
                    project.emoji
                  )}
                </div>
                  )}
                <div className="flip-label">
                  <div style={{ fontSize: 13.5, fontWeight: 700, lineHeight: 1.2 }}>{project.name}</div>
                  <span className={pillClass[project.status]} style={{ marginTop: ".25rem" }}>{pillLabel[project.status]}</span>
                </div>
              </div>
              <div className="flip-back">
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", marginBottom: ".25rem" }}>{project.name}</div>
                  <div style={{ fontSize: 11.5, color: "var(--ink-muted)", lineHeight: 1.55 }}>{project.shortDesc}</div>
                </div>
                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: ".25rem", marginTop: ".5rem" }}>
                    {project.stack.slice(0, 3).map((t) => <span key={t} style={{ fontSize: 9.5, fontFamily: "'JetBrains Mono', monospace", background: "var(--cream-2)", color: "var(--ink-soft)", padding: ".15rem .4rem", borderRadius: 4, border: "1px solid var(--p-border)" }}>{t}</span>)}
                  </div>
                  <div style={{ display: "flex", gap: ".4rem", marginTop: ".55rem" }}>
                    <button onClick={(e) => { e.stopPropagation(); setActiveModal(project) }} style={{ fontSize: 10.5, fontWeight: 600, padding: ".3rem .65rem", borderRadius: 5, background: "var(--ink)", color: "var(--cream)", border: "none", cursor: "pointer" }}>Details</button>
                    <button onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`) }} style={{ fontSize: 10.5, fontWeight: 600, padding: ".3rem .65rem", borderRadius: 5, background: "var(--cream-2)", color: "var(--ink)", border: "1px solid var(--p-border)", cursor: "pointer" }}>Full Page ↗</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {activeModal && <Modal project={activeModal} onClose={() => setActiveModal(null)} />}
    </section>
  )
}
