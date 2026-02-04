// Common animation utility functions

import { interpolate, Easing } from "remotion";

/**
 * Standard fade-in animation
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames (default: 15)
 * @returns Opacity value 0-1
 */
export const fadeIn = (
  frame: number,
  start: number,
  duration: number = 15
): number => {
  return interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
};

/**
 * Standard fade-out animation
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames (default: 15)
 * @returns Opacity value 1-0
 */
export const fadeOut = (
  frame: number,
  start: number,
  duration: number = 15
): number => {
  return interpolate(frame, [start, start + duration], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
};

/**
 * Bounce scale animation (with back easing)
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames (default: 18)
 * @param from - Starting scale (default: 0.5)
 * @param to - Ending scale (default: 1)
 * @returns Scale value
 */
export const bounceScale = (
  frame: number,
  start: number,
  duration: number = 18,
  from: number = 0.5,
  to: number = 1
): number => {
  return interpolate(frame, [start, start + duration], [from, to], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.back(1.5)),
  });
};

/**
 * Continuous pulse effect (scales up and down)
 * @param frame - Current frame
 * @param speed - Pulse speed (default: 0.1)
 * @param amplitude - Pulse amplitude (default: 0.1)
 * @returns Scale multiplier
 */
export const pulse = (
  frame: number,
  speed: number = 0.1,
  amplitude: number = 0.1
): number => {
  return Math.sin(frame * speed) * amplitude + 1;
};

/**
 * Typing effect - reveals text character by character
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames
 * @param textLength - Total length of text to reveal
 * @returns Number of characters to display
 */
export const typingEffect = (
  frame: number,
  start: number,
  duration: number,
  textLength: number
): number => {
  const progress = interpolate(
    frame,
    [start, start + duration],
    [0, textLength],
    {
      extrapolateRight: "clamp",
      extrapolateLeft: "clamp",
    }
  );
  return Math.floor(progress);
};

/**
 * Slide animation (can be used for any direction)
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames (default: 20)
 * @param from - Starting position
 * @param to - Ending position
 * @returns Position value
 */
export const slide = (
  frame: number,
  start: number,
  duration: number = 20,
  from: number,
  to: number
): number => {
  return interpolate(frame, [start, start + duration], [from, to], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.ease),
  });
};

/**
 * Blinking cursor effect for typing animation
 * @param frame - Current frame
 * @param speed - Blink speed (default: 0.3)
 * @returns Opacity value 0-1
 */
export const blinkingCursor = (frame: number, speed: number = 0.3): number => {
  return Math.sin(frame * speed) * 0.5 + 0.5;
};

/**
 * Smooth transition using bezier curve
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames
 * @param from - Starting value
 * @param to - Ending value
 * @returns Interpolated value
 */
export const smoothTransition = (
  frame: number,
  start: number,
  duration: number,
  from: number,
  to: number
): number => {
  return interpolate(frame, [start, start + duration], [from, to], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });
};

/**
 * Elastic bounce effect (overshoot and settle)
 * @param frame - Current frame
 * @param start - Start frame
 * @param duration - Duration in frames (default: 30)
 * @param from - Starting value
 * @param to - Ending value
 * @returns Interpolated value
 */
export const elasticBounce = (
  frame: number,
  start: number,
  duration: number = 30,
  from: number,
  to: number
): number => {
  return interpolate(frame, [start, start + duration], [from, to], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.back(2)),
  });
};
