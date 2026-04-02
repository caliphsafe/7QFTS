export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand-mark">
          [ 7 QUESTIONS TO YOUR SOUL ]
        </a>

        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/community">Community Feed</a>
          <a href="/gallery">Gallery</a>
          <a href="/book">Book Interview</a>
        </nav>
      </div>
    </header>
  );
}
