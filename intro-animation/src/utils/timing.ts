// Timing constants for animation sequences (in frames at 30fps)

export const fps = 30;

// Scene durations (in frames)
export const sceneDurations = {
  title: 120,           // 4 seconds
  intro: 150,           // 5 seconds
  order: 150,           // 5 seconds
  receives: 180,        // 6 seconds
  recipe: 240,          // 8 seconds
  cooking: 240,         // 8 seconds
  serve: 150,           // 5 seconds
  summary: 120,         // 4 seconds
  total: 1350,          // 45 seconds
} as const;

// Animation durations (in frames)
export const animDurations = {
  fadeIn: 15,           // 0.5 seconds
  fadeOut: 15,          // 0.5 seconds
  bounce: 18,           // 0.6 seconds
  typing: 30,           // 1 second
  transition: 24,       // 0.8 seconds
} as const;

// Helper to convert seconds to frames
export const secondsToFrames = (seconds: number): number => seconds * fps;

// Helper to convert frames to seconds
export const framesToSeconds = (frames: number): number => frames / fps;
