import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0B1024",
    surface1: "#141A33",
    surface2: "#1C2243",
    surface3: "#252C55",
    surfaceInverse: "#F1ECDB",
    textPrimary: "#EDE8D5",
    textMuted: "#A6AEC8",
    textInverse: "#0B1024",
    textOnAccentPrimary: "#0B1024",
    textLink: "#E2C46F",
    focusRing: "#F0D27A",
    line: "#2C3458",
    lineStrong: "#3D4570",
    accentPrimary: "#3F5BD9",
    accentSecondary: "#8A5BD6",
    accentBright: "#E2C46F",
    statusConfirmed: "#5DB67A",
    statusCaution: "#D89E40",
    statusUnknown: "#8A93A6",
  },
  typography: {
    headingFamily:
      "Cinzel, Marcellus, 'EB Garamond', 'Times New Roman', serif",
    bodyFamily:
      "Inter, 'IBM Plex Sans', 'Helvetica Neue', system-ui, sans-serif",
    headingWeight: 700,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow: "0 2px 12px rgba(5, 8, 22, 0.55)",
    hoverLift: "2px",
  },
  density: "comfortable",
  background: { mode: "gradient", overlay: 0.72, position: "center top" },
  variants: {
    home: "split-panel",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "full-width",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;