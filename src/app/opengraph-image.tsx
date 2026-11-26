import { ImageResponse } from "next/og";

export const alt = "Genildo Burgos | Engenharia de Software & Soluções Tech";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #18181b 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        {/* Top bar with Brand and domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                backgroundColor: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              &lt;/&gt;
            </div>
            <span
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                letterSpacing: "-0.5px",
              }}
            >
              genildoburgos<span style={{ color: "#3b82f6" }}>.tech</span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "9999px",
              padding: "6px 16px",
              fontSize: "14px",
              color: "#34d399",
              fontWeight: "600",
            }}
          >
            ● Aberto para Projetos
          </div>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "960px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              margin: 0,
            }}
          >
            Genildo Burgos
          </h1>
          <p
            style={{
              fontSize: "26px",
              color: "#a1a1aa",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Engenharia de Software, Sistemas Escaláveis e Inteligência Artificial Aplicada.
          </p>
        </div>

        {/* Bottom bar with tech tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["Next.js", "Python", "TypeScript", "AI Agents", "Open Source"].map((tech) => (
              <div
                key={tech}
                style={{
                  backgroundColor: "#18181b",
                  border: "1px solid #27272a",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontSize: "15px",
                  color: "#d4d4d8",
                  fontWeight: "500",
                }}
              >
                {tech}
              </div>
            ))}
          </div>

          <div
            style={{
              fontSize: "16px",
              color: "#71717a",
            }}
          >
            github.com/genildoburgos
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
