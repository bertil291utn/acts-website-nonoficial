"use client";

import { officialInfoEmail } from "@/lib/site";
import { useTranslations } from "next-intl";

function stripLabelAsterisk(label: string): string {
  return label.replace(/\s*\*\s*$/u, "").trim();
}

export function InfoContactForm() {
  const t = useTranslations("Info");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const country = String(fd.get("country") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const subject = encodeURIComponent(t("mailtoSubject"));
    const ln = (key: "labels.name" | "labels.email" | "labels.country" | "labels.message") =>
      stripLabelAsterisk(t(key));

    const bodyText = [
      `${ln("labels.name")}: ${name}`,
      `${ln("labels.email")}: ${email}`,
      `${ln("labels.country")}: ${country}`,
      "",
      `${ln("labels.message")}:`,
      message,
    ].join("\n");

    const body = encodeURIComponent(bodyText);
    window.location.href = `mailto:${officialInfoEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-acts-muted">
          {t("labels.name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="mt-1 w-full border-b border-white/20 bg-transparent py-2 text-acts-cream outline-none placeholder:text-acts-muted focus:border-acts-teal"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-acts-muted">
          {t("labels.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 w-full border-b border-white/20 bg-transparent py-2 text-acts-cream outline-none focus:border-acts-teal"
        />
      </div>
      <div>
        <label htmlFor="country" className="block text-sm font-medium text-acts-muted">
          {t("labels.country")}
        </label>
        <input
          id="country"
          name="country"
          type="text"
          autoComplete="country-name"
          className="mt-1 w-full border-b border-white/20 bg-transparent py-2 text-acts-cream outline-none focus:border-acts-teal"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-acts-muted">
          {t("labels.message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full border border-white/15 bg-acts-slate/50 px-3 py-2 text-acts-cream outline-none focus:border-acts-teal"
        />
      </div>
      <button
        type="submit"
        className="inline-flex rounded-md bg-acts-lime px-8 py-3 text-sm font-semibold text-acts-on-lime hover:bg-acts-lime/90"
      >
        {t("submit")}
      </button>
    </form>
  );
}
