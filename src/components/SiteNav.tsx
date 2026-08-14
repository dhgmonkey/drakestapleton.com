import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Life", end: true },
  { to: "/path", label: "Path", end: true },
  { to: "/software", label: "Software", end: true },
  { to: "/what-i-learned", label: "Lessons", end: true },
  { to: "/evidence", label: "Record", end: true },
];

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="brand" end>
          <span className="brand-name">Drake Stapleton</span>
          <span className="brand-line">The life behind the work</span>
        </NavLink>
        <nav className="links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
