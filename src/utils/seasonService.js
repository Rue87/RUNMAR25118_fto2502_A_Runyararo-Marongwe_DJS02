import { seasons } from "../data.js";

export const SeasonService = {
  count(podcastId) {
    const match = seasons.find(s => s.id === podcastId);
    return match ? match.seasonDetails.length : 1;
  }
};