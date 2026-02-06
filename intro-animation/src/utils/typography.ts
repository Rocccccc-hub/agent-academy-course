// Typography constants for consistent text styling

export const typography = {
  // Font family: Use system fonts for better performance
  // PingFang SC (macOS/iOS), Microsoft YaHei (Windows), fallback to system defaults
  fontFamily: 'system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", "Segoe UI", sans-serif',

  // Font sizes
  title: 64,
  heading: 48,
  subheading: 36,
  body: 32,
  caption: 24,
  small: 20,

  // Font weights
  bold: "bold",
  semibold: "600",
  medium: "500",
  regular: "400",

  // Line heights
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.8,
} as const;
