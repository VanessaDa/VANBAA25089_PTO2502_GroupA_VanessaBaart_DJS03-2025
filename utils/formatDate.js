/** @module utils/formatDate */

/**
 * Lightweight “time ago” formatter using Intl.RelativeTimeFormat.
 * Falls back to simple strings if not supported.
 * @param {Date} date
 * @returns {string} e.g., "2 days ago"
 */
export function timeAgo(date) {
  const now = new Date();
  const diffMs = date.getTime() - now.getTime(); // negative for past
  const units = [
    ["year", 1000 * 60 * 60 * 24 * 365],
    ["month", 1000 * 60 * 60 * 24 * 30],
    ["week", 1000 * 60 * 60 * 24 * 7],
    ["day", 1000 * 60 * 60 * 24],
    ["hour", 1000 * 60 * 60],
    ["minute", 1000 * 60],
    ["second", 1000],
  ];

  for (const [unit, ms] of units) {
    const val = Math.trunc(diffMs / ms);
    if (Math.abs(val) >= 1) {
      if (typeof Intl !== "undefined" && Intl.RelativeTimeFormat) {
        return new Intl.RelativeTimeFormat(undefined, {
          numeric: "auto",
        }).format(val, unit);
      }
      return `${Math.abs(val)} ${unit}${Math.abs(val) > 1 ? "s" : ""} ${
        val < 0 ? "ago" : "from now"
      }`;
    }
  }
  return "just now";
}
