import { personal } from "../data/portfolio"

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="12" y1="18" x2="12" y2="12"/>
    <polyline points="9 15 12 18 15 15"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

export default function Hero() {
  return (
    <header className="page-container animate-fade-up" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "1.75rem" }}>
        {/* Avatar */}
        <div style={{
          width: 100,
          height: 100,
          borderRadius: 18,
          background: "#1e1e1e",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 24,
          fontWeight: 700,
          color: "var(--green)",
          border: "2.5px solid var(--p-border)",
          boxShadow: "var(--shadow-sm)",
          flexShrink: 0,
          letterSpacing: -1,
          marginTop: 4,
          transition: "box-shadow 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s cubic-bezier(0.4,0,0.2,1), transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-md)";
          e.currentTarget.style.borderColor = "var(--p-border-hover)";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          e.currentTarget.style.borderColor = "var(--p-border)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
        >
          <img src="/avatar.jpg" alt="Archie" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 15 }} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Status + Location */}
          <div style={{ display: "flex", alignItems: "center", gap: ".65rem", flexWrap: "wrap", marginBottom: "1rem" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".45rem",
              fontSize: 11.5,
              fontWeight: 600,
              color: "#1a8a5a",
              fontFamily: "'JetBrains Mono', monospace",
              background: "rgba(26, 138, 90, 0.08)",
              padding: "0.25rem 0.55rem",
              borderRadius: 8,
            }}>
              <span style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#1a8a5a",
                display: "inline-block",
                flexShrink: 0,
                boxShadow: "0 0 0 2px rgba(26, 138, 90, 0.15)",
              }} className="animate-blink" />
              {personal.status}
            </span>
            <span style={{ color: "var(--p-border)", fontSize: 12 }}>·</span>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".35rem",
              fontSize: 11.5,
              color: "var(--ink-muted)",
              fontFamily: "'JetBrains Mono', monospace",
            }}>
              <LocationIcon />
              {personal.location}
            </span>
          </div>

          {/* Name */}
          <h1 style={{
            fontSize: "clamp(2rem, 6vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-.035em",
            marginBottom: ".45rem",
            textWrap: "balance",
          }}>
            {personal.name}
          </h1>

          {/* Tagline - C# comment style */}
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13.5,
            color: "#6a9955",
            fontStyle: "italic",
            marginBottom: "1.4rem",
            opacity: 0.9,
          }}>
            // {personal.tagline}
          </p>

          {/* Actions */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: ".65rem", alignItems: "center" }}>
            <a href={`mailto:${personal.email}`} className="btn btn-primary" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".45rem",
              padding: ".6rem 1.25rem",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: 600,
              background: "var(--ink)",
              color: "var(--cream)",
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--ink-soft)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--ink)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              Get In Touch
            </a>

            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn btn-accent" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".45rem",
              padding: ".6rem 1.25rem",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: 600,
              background: "#0a66c2",
              color: "#fff",
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0958a8";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(10, 102, 194, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0a66c2";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <LinkedInIcon /> LinkedIn
            </a>

            <a href={personal.cv} className="btn btn-outline" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: ".45rem",
              padding: ".6rem 1.25rem",
              borderRadius: 10,
              fontSize: 13.5,
              fontWeight: 600,
              background: "var(--p-card)",
              color: "var(--ink)",
              textDecoration: "none",
              border: "1px solid var(--p-border)",
              transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ink-muted)";
              e.currentTarget.style.background = "var(--cream-2)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--p-border)";
              e.currentTarget.style.background = "var(--p-card)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            >
              <DownloadIcon /> Download CV
            </a>

            {/* Social icons */}
            <a href={personal.facebook} target="_blank" rel="noreferrer" className="btn-icon" style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "var(--p-card)",
              border: "1px solid var(--p-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1877f2",
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              e.currentTarget.style.borderColor = "var(--p-border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "var(--p-border)";
            }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a href={personal.instagram} target="_blank" rel="noreferrer" className="btn-icon" style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "var(--p-card)",
              border: "1px solid var(--p-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e1306c",
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-sm)";
              e.currentTarget.style.borderColor = "var(--p-border-hover)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "var(--p-border)";
            }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}