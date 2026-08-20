import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-name">Drake Stapleton</p>
          <p className="site-footer-line">Freedom Fighter. AI Architect. Operator.</p>
          <p className="site-footer-line">Based in Springfield, Missouri. Chemistry, manufacturing, community, software, AI exploration, and independent invention.</p>
          <p className="site-footer-line">This site documents my projects, the work behind them, and the life that shaped them.</p>
          <p className="site-footer-line">I am open to good conversation and research partnerships that advance what our generation can build with AI.</p>
        </div>
        <nav className="site-footer-links" aria-label="Explore the site">
          <Link to="/">Life</Link>
          <Link to="/path">Path</Link>
          <Link to="/software">Software &amp; AI</Link>
          <Link to="/what-i-learned">Lessons</Link>
          <Link to="/interest">Conversation</Link>
          <Link to="/atlas">Latest project</Link>
          <Link to="/aegis">AEGIS</Link>
          <Link to="/symphony">Symphony</Link>
        </nav>
      </div>
    </footer>
  );
}
