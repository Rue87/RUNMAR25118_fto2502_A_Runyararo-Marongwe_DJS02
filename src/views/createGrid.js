//import { createPodcastCard } from "../components/createPodcastCard.js";
import { createModal } from "../components/createModal.js";
import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";
import { SeasonService } from "../utils/seasonService.js";

/**
 * @module createGrid
 * @description Grid Renderer - Responsible for rendering the grid of podcast preview components.
 * @principle SRP - Manages layout and rendering only; uses custom element for podcast cards.
 */

/**
 * Factory function for the podcast grid.
 * Finds the #podcastGrid element and returns a renderer object.
 *
 * @returns {{ render: function(Object[]): void }} Renderer with render method.
 */

export const createGrid = () => {
  const container = document.getElementById("podcastGrid");

  return {
    /**
     * Renders a list of <podcast-preview> components into the grid.
     *
     * @param {Object[]} podcastList - Array of podcast objects to render.
     * @param {string} podcastList[].id - Podcast ID.
     * @param {string} podcastList[].title - Podcast title.
     * @param {string} podcastList[].description - Podcast description.
     * @param {string} podcastList[].image - Podcast image URL.
     * @param {string[]} podcastList[].genres - Array of genre IDs.
     * @param {string|Date} podcastList[].updated - Last updated date.
     */

    render(podcastList) {
      container.innerHTML = "";
      podcastList.forEach((p) => {
        const preview = document.createElement("podcast-preview");

        // Set up data to pass to the web component
        preview.data = {
          ...p,
          genres: GenreService.getNames(p.genres),
          genreIds: p.genres,
          updated: DateUtils.format(p.updated),
          rawUpdated: p.updated,
          seasons: SeasonService.count(p.id),
        };

        // Listen for custom event from <podcast-preview> to open modal
        preview.addEventListener("podcastClick", (e) => {
          const podcastData = e.detail;
          // openModal(e.detail);
          createModal.open(preview._data);
        });
        container.appendChild(preview);
      });
    },
  };
};
