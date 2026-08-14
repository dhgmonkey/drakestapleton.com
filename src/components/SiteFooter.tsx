import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <p className="site-footer-name">Drake Stapleton</p>
          <p className="site-footer-line">Based in Springfield, Missouri. Chemistry, manufacturing, community, software, AI exploration, and independent invention.</p>
        </div>
        <nav className="site-footer-links" aria-label="Explore the site">
          <Link to="/">Life</Link>
          <Link to="/path">Path</Link>
          <Link to="/software">Software &amp; AI</Link>
          <Link to="/what-i-learned">Lessons</Link>
          <Link to="/atlas">Latest project</Link>
          <Link to="/evidence">Record</Link>
          <Link to="/symphony">Symphony</Link>
        </nav>
        <p className="site-footer-note">
          This story is shared by choice. Private records, credentials, and other people&apos;s lives remain private.
        </p>
      </div>
    </footer>
  );
}
