import { Outlet } from "react-router-dom";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function Layout() {
  return (
    <div className="site-shell">
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </div>
  );
}
