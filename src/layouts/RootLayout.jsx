import { NavLink, Link, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="link-container">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
