import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* Inner component: all hooks live here and are called every time it's mounted */
function ModalContent({ onClose, title = "Details", children }) {
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Effects: scroll lock, progress, focus trap, ESC to close
  useEffect(() => {
    const panel = panelRef.current;
    const content = contentRef.current;
    const prevOverflow = document.body.style.overflow;
    const lastFocused = document.activeElement;

    // Lock background scroll
    document.body.style.overflow = "hidden";

    // Reading progress bar
    const onScroll = () => {
      if (!content) return;
      const max = content.scrollHeight - content.clientHeight;
      const pct = max <= 0 ? 0 : (content.scrollTop / max) * 100;
      setProgress(pct);
    };
    content?.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Focus trap + ESC
    const selector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Tab") {
        const focusables = panel.querySelectorAll(selector);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    document.addEventListener("keydown", handleKey);

    // Move focus inside the modal
    setTimeout(() => {
      const first = panel?.querySelector(selector);
      if (first) first.focus();
      else panel?.focus();
    }, 0);

    return () => {
      document.removeEventListener("keydown", handleKey);
      content?.removeEventListener("scroll", onScroll);
      document.body.style.overflow = prevOverflow;
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[2147483647] flex items-center justify-center p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Backdrop BELOW panel */}
      <div className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel ABOVE backdrop; bigger popup 90% viewport size */}
      <div
        ref={panelRef}
        className="relative z-10 modal-enter flex flex-col rounded-2xl border border-white/10 bg-neutral-900 text-white shadow-2xl focus:outline-none pointer-events-auto"
        style={{ width: "90vw", height: "90vh", maxWidth: "1600px" }}
      >
        {/* Header with progress + close */}
        <div className="relative flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
          <h3 id="modal-title" className="text-sm sm:text-base text-white/85">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636 10 8.586z" />
            </svg>
          </button>

          {/* Reading progress */}
          <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Scrollable blog body */}
        <div ref={contentRef} className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
}

/* Wrapper: only mounts ModalContent when open, avoiding conditional hooks */
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return createPortal(
    <ModalContent onClose={onClose} title={title}>
      {children}
    </ModalContent>,
    document.body
  );
}
