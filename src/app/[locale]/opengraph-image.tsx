import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const runtime = "nodejs";
export const alt = "Acts29 · Hechos29 · Apg29";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ locale: string }> };

export default async function OpenGraphImage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1a2332 0%, #2a3d2a 45%, #1e2a1a 100%)",
          color: "#f5f0e6",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          {t("ogImageTitle")}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 28,
            opacity: 0.92,
            maxWidth: 920,
            textAlign: "center",
            lineHeight: 1.35,
          }}
        >
          {t("ogImageTagline")}
        </div>
      </div>
    ),
    { ...size },
  );
}
