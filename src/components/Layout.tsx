import { Outlet } from "react-router-dom";
import { SiteNav } from "./SiteNav";

export function Layout() {
  return (
    <>
      <SiteNav />
      <Outlet />
    </>
  );
}
