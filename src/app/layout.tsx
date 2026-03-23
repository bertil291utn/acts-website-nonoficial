import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Root passthrough — `<html>` / `<body>` live in `[locale]/layout.tsx` for `lang`. */
export default function RootLayout({ children }: Props) {
  return children;
}
