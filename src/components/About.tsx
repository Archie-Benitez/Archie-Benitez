import { about } from "../data/portfolio"

export default function About() {
  return (
    <section id="about">
      <div className="sec-label">About</div>
      <div className="p-card">
        <div style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.78 }}>
          {about.map((para, i) => (
            <p key={i} style={{ marginTop: i > 0 ? ".85rem" : 0 }} dangerouslySetInnerHTML={{ __html: para }} />
          ))}
        </div>
      </div>
    </section>
  )
}
