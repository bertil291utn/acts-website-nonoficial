import { Link } from "@/i18n/navigation";
import { Fragment } from "react";

const ECUADOR = /\b(Ecuador)\b/g;

type Props = { text: string; className?: string };

/** Wraps each whole-word “Ecuador” in a link to the country article. */
export function EcuadorWordLinks({ text, className }: Props) {
  const parts = text.split(ECUADOR);
  return (
    <>
      {parts.map((part, i) =>
        part === "Ecuador" ? (
          <Link
            key={i}
            href="/post/ecuador"
            className={
              className ??
              "underline decoration-acts-navy/50 underline-offset-2 hover:text-acts-navy"
            }
          >
            {part}
          </Link>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
