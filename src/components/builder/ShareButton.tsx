import { env } from "@/env/client";
import { useBunkerStore } from "@/lib/bunkerStore";
import { encodeState } from "@/lib/utils";
import { useState } from "react";

interface ShareButtonProps {}

export default function ShareButton({}: ShareButtonProps) {
  const state = useBunkerStore();
  const [showToast, setShowToast] = useState(false);

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

  return (
    <>
      <div className="btn btn-info" onClick={handleShare}>
        Share by URL
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-info">
            <span>Share URL copied to clipboard!</span>
          </div>
        </div>
      )}
    </>
  );
}
