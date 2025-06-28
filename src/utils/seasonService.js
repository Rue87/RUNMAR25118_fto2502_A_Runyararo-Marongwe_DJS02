import { seasons } from "../data.js";
/**
 * @module SeasonService
 * @description Utility service for retrieving season-related information for podcasts.
 * @responsibility Abstracts logic for accessing and counting podcast seasons.
 */

export const SeasonService = {

     /**
   * Returns the number of seasons for a given podcast ID.
   *
   * @param {string} podcastId - The unique ID of the podcast.
   * @returns {number} Number of seasons, or 1 if none found.
   */
  count(podcastId) {
    const match = seasons.find((s) => s.id === podcastId);
    return match ? match.seasonDetails.length : 1;
  },
};
