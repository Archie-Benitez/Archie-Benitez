import { galleryImages } from "../data/portfolio"

export default function Gallery() {
  const doubled = [...galleryImages, ...galleryImages]
  return (
    <section id="gallery">
      <div className="sec-label">Gallery</div>
      <div className="gallery-outer">
        <div className="gallery-track">
          {doubled.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}