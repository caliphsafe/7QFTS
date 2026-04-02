import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CelebrityVideoGrid from "@/components/CelebrityVideoGrid";
import QuestionFlow from "@/components/QuestionFlow";

export default function HomePage() {
  return (
    <main className="site-shell">
      <Header />

      <HeroSection />

      <section className="section">
        <div className="section-heading-wrap">
          <p className="eyebrow">Featured Voices</p>
          <h2 className="section-title" id="featured-videos">
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

      <section className="section" id="questions-coming-next">
        <div className="section-heading-wrap">
          <p className="eyebrow">Interactive Experience</p>
          <h2 className="section-title">Answer the 7 questions</h2>
          <p className="section-copy max-copy">
            Choose a country and language context, reflect on each question,
            move forward or back at your own pace, and save your written answer
            or add a video or audio response link.
          </p>
        </div>

        <QuestionFlow />
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
