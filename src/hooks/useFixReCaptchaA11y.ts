import { useEffect } from "react";

const patchReCaptchaElements = (): void => {
  const textareas = document.querySelectorAll<HTMLTextAreaElement>(
    "textarea.g-recaptcha-response",
  );

  textareas.forEach((textarea) => {
    if (!textarea.hasAttribute("aria-hidden")) {
      textarea.setAttribute("aria-hidden", "true");
      textarea.setAttribute("aria-label", "reCAPTCHA response (hidden)");
      textarea.setAttribute("tabindex", "-1");
    }
  });

  const badges = document.querySelectorAll<HTMLDivElement>(".grecaptcha-badge");
  badges.forEach((badge) => {
    if (!badge.hasAttribute("aria-hidden")) {
      badge.setAttribute("aria-hidden", "true");
    }
  });
};

export const useFixReCaptchaA11y = (): void => {
  useEffect(() => {
    patchReCaptchaElements();

    const observer = new MutationObserver(patchReCaptchaElements);

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);
};
