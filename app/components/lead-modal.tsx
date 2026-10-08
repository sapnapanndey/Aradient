"use client";

import Image from "next/image";
import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import siteContent from "../content/site-content.json";
import stepStrategyImage from "../../images/ai/step-strategy.jpg";
import { SvgIcon } from "./ui";

type LeadPrefill = { email?: string; requirement?: string };

const LeadModalContext = createContext<(prefill?: LeadPrefill) => void>(() => {});

// Opens the site-wide contact form, optionally pre-filling the message.
export function useLeadModal() {
  return useContext(LeadModalContext);
}

const emptyForm = { name: "", email: "", company: "", requirement: "" };

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const closeTimeoutRef = useRef<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState(emptyForm);

  const { footer, leadModal } = siteContent;

  const open = useCallback((prefill: LeadPrefill = {}) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setForm((current) => ({
      ...current,
      email: prefill.email || current.email,
      requirement: prefill.requirement || current.requirement,
    }));
    setSubmitError("");
    setIsSubmitted(false);
    setIsClosing(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    if (!isOpen || isClosing) return;

    setIsClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimeoutRef.current = null;
    }, 320);
  }, [isClosing, isOpen]);

  useEffect(() => {
    if (!isOpen && !isClosing) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, isClosing, isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Unable to send your request right now.");
      }

      setIsSubmitted(true);
      setForm(emptyForm);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Unable to send your request right now.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LeadModalContext.Provider value={open}>
      {children}

      {isOpen || isClosing ? (
        <div className={`ix-modal-backdrop ${isClosing ? "is-closing" : ""}`} onClick={close}>
          <div
            aria-labelledby="lead-modal-title"
            aria-modal="true"
            className={`ix-modal ${isSubmitted ? "is-success" : ""} ${isClosing ? "is-closing" : ""}`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close form"
              className="ix-modal-close"
              onClick={close}
              type="button"
            >
              <SvgIcon className="icon-svg" name="close" />
            </button>

            {isSubmitted ? (
              <div className="ix-modal-success">
                <span className="ix-modal-success-orb" aria-hidden="true">
                  <SvgIcon className="icon-svg" name="check" />
                </span>
                <span className="ix-eyebrow">Request sent</span>
                <h2 id="lead-modal-title">{leadModal.successTitle}</h2>
                <p>{leadModal.successText}</p>
                <button className="ix-dark-button" onClick={close} type="button">
                  {leadModal.successButton}
                  <SvgIcon className="icon-svg" name="arrow-right" />
                </button>
              </div>
            ) : (
              <div className="ix-modal-grid">
                <aside className="ix-modal-aside">
                  <Image
                    alt=""
                    className="ix-modal-aside-image"
                    fill
                    placeholder="blur"
                    sizes="(max-width: 760px) 100vw, 420px"
                    src={stepStrategyImage}
                  />
                  <div className="ix-modal-aside-content">
                    <span className="ix-tag ix-tag-light">{leadModal.asideEyebrow}</span>
                    <h2 id="lead-modal-title">{leadModal.asideTitle}</h2>
                    <p>{leadModal.asideDescription}</p>

                    <div className="ix-modal-contacts">
                      {footer.contacts
                        .filter((item) => item.icon === "phone" || item.icon === "mail")
                        .map((item) => (
                          <a className="ix-modal-contact" href={item.href} key={item.label}>
                            <span className="ix-modal-contact-icon" aria-hidden="true">
                              <SvgIcon className="icon-svg" name={item.icon} />
                            </span>
                            <span>
                              <small>{item.icon === "phone" ? "Call us" : "Email us"}</small>
                              <strong>{item.label}</strong>
                            </span>
                          </a>
                        ))}
                    </div>

                    <p className="ix-modal-note">
                      <span className="ix-modal-note-dot" aria-hidden="true" />
                      {leadModal.replyNote}
                    </p>
                  </div>
                </aside>

                <form className="ix-modal-form" onSubmit={handleSubmit}>
                  <h3>{leadModal.formTitle}</h3>

                  <div className="ix-field-row">
                    <label className="ix-field">
                      <span>Name</span>
                      <input
                        autoComplete="name"
                        name="name"
                        onChange={handleFieldChange}
                        placeholder="Your name"
                        required
                        type="text"
                        value={form.name}
                      />
                    </label>
                    <label className="ix-field">
                      <span>Work email</span>
                      <input
                        autoComplete="email"
                        name="email"
                        onChange={handleFieldChange}
                        placeholder="name@company.com"
                        required
                        type="email"
                        value={form.email}
                      />
                    </label>
                  </div>

                  <label className="ix-field">
                    <span>
                      Company <em>Optional</em>
                    </span>
                    <input
                      autoComplete="organization"
                      name="company"
                      onChange={handleFieldChange}
                      placeholder="Company name"
                      type="text"
                      value={form.company}
                    />
                  </label>

                  <label className="ix-field">
                    <span>What are you building?</span>
                    <textarea
                      name="requirement"
                      onChange={handleFieldChange}
                      placeholder="A few lines about your idea, timeline or the problem to solve"
                      required
                      rows={4}
                      value={form.requirement}
                    />
                  </label>

                  {submitError ? <p className="ix-modal-error">{submitError}</p> : null}

                  <button
                    className="ix-dark-button ix-modal-submit"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Sending…" : leadModal.submit}
                    <SvgIcon className="icon-svg" name="arrow-right" />
                  </button>
                  <p className="ix-modal-privacy">{leadModal.privacy}</p>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </LeadModalContext.Provider>
  );
}

// A button that opens the contact form from anywhere, including server-rendered pages.
export function ContactButton({
  children,
  className,
  requirement,
}: {
  children: ReactNode;
  className: string;
  requirement?: string;
}) {
  const openLeadModal = useLeadModal();

  return (
    <button className={className} onClick={() => openLeadModal({ requirement })} type="button">
      {children}
    </button>
  );
}
