import posthog from "posthog-js";
import { useState } from "react";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  return (
    <div className="cookiebanner">
      {showBanner && (
        <div>
          <p className="cookiepara">
            We use cookies on our website to provide you with a more
            personalized digital experience. To learn more about how we use
            cookies and how you can change your cookie settings, please refer to
            our{" "}
            <a className="cookiepvy" href="/privacy">
              Privacy Policy
            </a>{" "}
            Statement.
          </p>
          <div className="cokkiebtn">
            <button
              className="readoncookie"
              type="button"
              onClick={acceptCookies}
            >
              Accept all Cookies
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CookieBanner;
