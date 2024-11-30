import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
function Layout2() {
  return (
    <>
    <ScrollToTop />
      <Outlet />
    </>
  );
}
export default Layout2;
