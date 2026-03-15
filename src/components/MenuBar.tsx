

import { useRouterState } from "@tanstack/react-router";

interface MenuBarProps {}

export default function MenuBar({}: MenuBarProps) {
  const path = useRouterState({
    select: (state) => state.location.pathname,
  });

  const buttons = [
    {
      text: "RULES",
      path: "/rules",
    },
    {
      text: "BUNKER",
      path: "/bunker",
    },
  ];

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Flames of Orion</a>
      </div>
      <div className="navbar-end flex gap-2 text-title">
        {buttons.map((button) => (
          <a
            key={button.path}
            href={button.path}
            className={`btn btn-ghost drawer-button ${path === button.path ? "btn-active btn-accent" : ""}`}
          >
            {button.text}
          </a>
        ))}
        {/* <Link href="/rules" className="btn btn-ghost drawer-button">
          Rules
        </Link>
        <Link href="/bunker" className="btn btn-ghost drawer-button">
          Bunker
        </Link> */}
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
    </div>
  );
}
