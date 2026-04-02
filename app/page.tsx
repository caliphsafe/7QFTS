import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CelebrityVideoGrid from "@/components/CelebrityVideoGrid";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Header />

      <HeroSection />

      <section className="section">
        <div className="section-heading-wrap">
          <p className="eyebrow">Featured Voices</p>
          <h2 className="section-title">
            Celebrities answer the 7 questions for your soul
          </h2>
          <p className="section-copy max-copy">
            A growing series of short video responses from cultural figures,
            artists, thinkers, and public voices. These clips are designed to
            pull people into the experience and invite them to answer the same
            seven questions for themselves.
          </p>
        </div>

        <CelebrityVideoGrid />
      </section>

      <section className="section">
        <div className="question-placeholder-card">
          <div className="placeholder-topline" />
          <p className="eyebrow">Interactive Experience</p>
          <h2 className="section-title">The 7-question experience is next</h2>
          <p className="section-copy max-copy">
            In the next step, we will build the full question flow with language
            selection, previous and next toggles, answer saving, video or audio
            response links, and the final submission experience.
          </p>

          <div className="placeholder-grid">
            <div className="placeholder-box">
              <span>Language selector</span>
            </div>
            <div className="placeholder-box">
              <span>Question progress</span>
            </div>
            <div className="placeholder-box">
              <span>Answer area</span>
            </div>
            <div className="placeholder-box">
              <span>Next / Back navigation</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <p>7 Questions To Your Soul</p>
          <p>Amar Bennett · New York · No Correct Answers. Only Honest Ones.</p>
        </div>
      </footer>
    </main>
  );
}
