import { ImageResponse } from "next/og";

export const alt = "Nirvya Health — Healthcare Infrastructure for the Last Mile";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#09090B",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          <div
            style={{ width: "12px", height: "12px", borderRadius: "999px", background: "#0A6847" }}
          />
          <div
            style={{
              color: "#0A6847",
              fontSize: "22px",
              letterSpacing: "4px",
              textTransform: "uppercase"
            }}
          >
            Healthcare for the last mile
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "76px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: "900px"
          }}
        >
          Every family deserves health access.
        </div>
        <div style={{ display: "flex", color: "#A1A1AA", fontSize: "26px", marginTop: "36px" }}>
          Nirvya Health · ABDM native · Open source
        </div>
      </div>
    ),
    { ...size }
  );
}
