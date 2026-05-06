import Hero from "../components/Hero"
import About from "../components/About"
import BentoGrid from "../components/BentoGrid"
import TechStack from "../components/TechStack"
import Journey from "../components/Journey"
import ProjectGrid from "../components/ProjectGrid"
import RecentCerts from "../components/RecentCerts"
import Gallery from "../components/Gallery"
import Obsessions from "../components/Obsessions"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "0 1.25rem 5rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div className="two-col-grid"><About /><BentoGrid /></div>
        <div className="two-col-grid"><TechStack /><Journey /></div>
        <ProjectGrid />
        <RecentCerts />
        <Gallery />
        <Obsessions />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
