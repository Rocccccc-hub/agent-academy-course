// Typography constants for consistent text styling

export const typography = {
  // Font family (loaded from @remotion/google-fonts/NotoSansSC)
  // Noto Sans SC provides excellent Chinese character support
  fontFamily: '"Noto Sans SC", sans-serif',

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
