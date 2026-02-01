import { NavLink, useLocation } from "react-router";

export function Nav() {
  const baseClass = 'flex-1 h-8 flex items-center justify-center border-r border-[#999]';

  return (
    <nav className="flex w-full">
      <NavLink
        to="/"
        className={ ({ isActive }) => isActive ? `${baseClass} border-l font-bold` : `${baseClass} border-l` }
      >
        Profile
      </NavLink>
      <NavLink
        to="/works"
        className={ ({ isActive }) => isActive ? `${baseClass} font-bold` : baseClass }
      >
        Works
      </NavLink>
    </nav>
  );
}