import { env } from "@/env/client";
import { useBunkerStore } from "@/lib/bunkerStore";
import { encodeState } from "@/lib/utils";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { FolderDown, FolderPlus, Menu, Share2 } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function MenuBar() {
  const path = useRouterState({
    select: (state) => state.location.pathname,
  });
  const navigate = useNavigate();
  const { bunker, mechs, initializeBunker } = useBunkerStore();
  const state = { bunker, mechs };
  const [showToast, setShowToast] = useState(false);

  const buttons = [
    {
      text: "RULES",
      path: "/rules",
    },
    {
      text: "BUNKER",
      path: "/bunker",
    },
    {
      text: "GAME",
      path: "/game",
    },
    {
      text: "VIEW",
      path: "/view",
    },
  ];

  const handleShare = async () => {
    const baseUrl = env.VITE_PUBLIC_URL;
    const stateString = encodeState(state);
    console.log("Encoded state:", stateString);
    const url = `${baseUrl}/bunker?share=${encodeURIComponent(stateString)}`;
    await navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const handleCreateNew = async () => {
    if (
      confirm("Are you sure you want to create a new bunker? This will clear your current bunker.")
    ) {
      initializeBunker();
      await navigate({ to: "/bunker" });
    }
  };

  return (
    <>
      <div className="navbar bg-base-200 shadow-sm">
        <div className="navbar-start w-auto flex-1">
          <a className="btn btn-ghost text-xl">Flames of Orion</a>
        </div>

        <div className="navbar-end flex gap-2 ">
          <ul className="menu menu-horizontal px-1 gap-2 hidden md:flex">
            {buttons.map((button) => (
              <li key={button.path}>
                <a
                  href={button.path}
                  className={`btn btn-ghost text-title ${path === button.path ? "btn-active btn-accent" : ""}`}
                >
                  {button.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <Menu />
            </div>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {buttons.map((btn) => (
                <li key={btn.path}>
                  <a href={btn.path}>{btn.text}</a>
                </li>
              ))}
              <hr className="my-2 border-gray-400" />
              <li>
                <button onClick={handleShare}>
                  <Share2 size={18} /> Share Bunker URL
                </button>
              </li>
              <li>
                <a href="/load">
                  <FolderDown size={18} /> Load Bunker
                </a>
              </li>
              <li>
                <button onClick={handleCreateNew}>
                  <FolderPlus size={18} /> Create New Bunker
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showToast &&
        createPortal(
          <div className="toast toast-top toast-center">
            <div className="alert alert-info">
              <span>Share URL copied to clipboard!</span>
            </div>
          </div>,
          window.document.body,
        )}
    </>
  );
}
