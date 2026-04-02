export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-panel">
        <div className="hero-accent" />

        <p className="hero-kicker">Amar Bennett · New York</p>

        <h1 className="hero-title">7 Questions To Your Soul</h1>

        <p className="hero-subtitle">
          No correct answers. Only honest ones.
        </p>

        <p className="hero-copy">
          A reflective interview and community experience built around seven
          soul-searching questions about identity, values, culture, self
          awareness, and the universe.
        </p>

        <div className="hero-actions">
          <a href="#featured-videos" className="btn btn-solid">
            Watch Featured Videos
          </a>
          <a href="#questions-coming-next" className="btn btn-outline">
            Explore the Experience
          </a>
        </div>
      </div>
    </section>
  );
}
