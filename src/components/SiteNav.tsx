import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Drake", end: true },
  { to: "/path", label: "The path", end: true },
  { to: "/atlas", label: "Atlas", end: true },
  { to: "/what-i-learned", label: "What I learned", end: true },
  { to: "/evidence", label: "Evidence", end: true },
  { to: "/symphony", label: "Symphony", end: true },
];

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="brand" end>
          Drake Stapleton
          <span>The life behind the work</span>
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
