/**
 * Date Formatter - Utility function for date formatting.
 *
 * @principle SRP - Single Responsibility Principle: This module only formats dates and does not handle any unrelated logic.
 */

export const DateUtils = {
  /**
   * Formats a date string into a human-readable relative format.
   * @param {string} dateString - Any valid date string.
   * @returns {string} Human-readable format like "Updated 3 days ago"
   */
  format(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;

    if (isNaN(date)) return "Updated: Invalid date";

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days === 0) return "Updated today";
    if (days === 1) return "Updated yesterday";
    if (days < 7) return `Updated ${days} days ago`;
    if (days < 30) return `Updated ${Math.floor(days / 7)} week(s) ago`;

    return `Updated ${Math.floor(days / 30)} month(s) ago`;
    /* return `Updated on ${date.toDateString()}`;*/
  },
};
