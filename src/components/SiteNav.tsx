import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Drake", end: true },
  { to: "/path", label: "The path", end: true },
  { to: "/evidence", label: "Evidence", end: true },
  { to: "/symphony", label: "Symphony", end: true },
  { to: "/symphony/first", label: "First run", end: false },
  { to: "/symphony/workflow", label: "Workflow", end: false },
  { to: "/symphony/map", label: "Bird’s-eye", end: false },
];

export function SiteNav() {
  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <NavLink to="/" className="brand" end>
          Drake Stapleton
          <span>Chemistry, systems, and Atlas</span>
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
