import { useEffect, useState } from "react";

type GoogleFc = {
  callbackQueue?: Array<Record<string, () => void> | (() => void)>;
  showRevocationMessage?: () => void;
};

declare global {
  interface Window {
    googlefc?: GoogleFc;
  }
}

/**
 * Google Privacy & Messaging only exposes this control after its consent API
 * is ready. Until AdSense is approved and the Google tag is enabled, the
 * control stays hidden instead of presenting a button that cannot work.
 */
const PrivacyChoices = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    window.googlefc = window.googlefc ?? {};
    window.googlefc.callbackQueue = window.googlefc.callbackQueue ?? [];
    window.googlefc.callbackQueue.push({
      CONSENT_API_READY: () => setIsReady(true),
    });
  }, []);

  if (!isReady) return null;

  const openPrivacyChoices = () => {
    const googlefc = window.googlefc;
    if (!googlefc?.showRevocationMessage) return;
    googlefc.callbackQueue = googlefc.callbackQueue ?? [];
    googlefc.callbackQueue.push(googlefc.showRevocationMessage);
  };

  return (
    <button
      type="button"
      onClick={openPrivacyChoices}
      className="hover:text-foreground transition-colors"
    >
      Privacy and cookie settings
    </button>
  );
};

export default PrivacyChoices;
