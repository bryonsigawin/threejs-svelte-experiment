export function mapRange(in_min, in_max, input, out_min, out_max) {
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function clamp(min, input, max) {
  return Math.max(min, Math.min(input, max));
}

export const lerp = (a, b, n) => (1 - n) * a + n * b;
