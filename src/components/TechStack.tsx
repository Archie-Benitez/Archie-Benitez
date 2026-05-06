import { techStack } from "../data/portfolio"

export default function TechStack() {
  return (
    <section id="stack">
      <div className="sec-label">Tech Stack</div>
      <div className="p-card">
        {techStack.map((group, gi) => (
          <div key={group.category} style={{ marginBottom: gi < techStack.length - 1 ? "1rem" : 0 }}>
            <div style={{ fontSize: "9.5px", fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: ".45rem" }}>
              {group.category}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".35rem" }}>
              {group.tags.map((tag) => (
                <span key={tag} className={`tag ${group.variant === "learning" ? "tag-learning" : ""}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
