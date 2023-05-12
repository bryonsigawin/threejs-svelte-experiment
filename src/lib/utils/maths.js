export function mapRange(value, low1, high1, low2, high2) {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
}

export function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max));
}

export const lerp = (a, b, n) => (1 - n) * a + n * b;
