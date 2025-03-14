// Theme configurations for LinkHub
export const themes = {
  light: {
    name: "Light",
    background: "#ffffff",
    card: "#f5f5f5",
    accent: "#0ea5e9",
    textPrimary: "#1f2937",
    textSecondary: "#6b7280"
  },
  dark: {
    name: "Dark",
    background: "#111827",
    card: "#1f2937",
    accent: "#3b82f6",
    textPrimary: "#f3f4f6",
    textSecondary: "#9ca3af"
  },
  purple: {
    name: "Purple",
    background: "#f5f3ff",
    card: "#ede9fe",
    accent: "#8b5cf6",
    textPrimary: "#4c1d95",
    textSecondary: "#6d28d9"
  },
  forest: {
    name: "Forest",
    background: "#ecfdf5",
    card: "#d1fae5",
    accent: "#059669",
    textPrimary: "#064e3b",
    textSecondary: "#047857"
  },
  sunset: {
    name: "Sunset",
    background: "#fff7ed",
    card: "#ffedd5",
    accent: "#f97316",
    textPrimary: "#7c2d12",
    textSecondary: "#c2410c"
  }
};

// Default theme
export const defaultTheme = themes.light;