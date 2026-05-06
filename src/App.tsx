import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Home from "./pages/Home.tsx"
import Projects from "./pages/Projects.tsx"
import ProjectDetail from "./pages/ProjectDetail.tsx"
import Certificates from "./pages/Certificates.tsx"

// Saves scroll position per path, restores on back navigation
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    // If navigating back (popstate), restore saved position
    const saved = sessionStorage.getItem(`scroll_${location.key}`)
    if (saved) {
      setTimeout(() => window.scrollTo(0, parseInt(saved)), 50)
    } else {
      window.scrollTo(0, 0)
    }

    // Save scroll position before leaving
    const handleScroll = () => {
      sessionStorage.setItem(`scroll_${location.key}`, String(window.scrollY))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [location])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </BrowserRouter>
  )
}
