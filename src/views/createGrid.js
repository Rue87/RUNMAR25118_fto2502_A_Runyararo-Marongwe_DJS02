//import { createPodcastCard } from "../components/createPodcastCard.js";
import { createModal } from "../components/createModal.js";

/**
 * Grid Renderer - Responsible for rendering the grid of podcast preview components.
 *
 * @principle SRP - Manages layout and rendering only; uses custom element for podcast cards
 */
export const createGrid = () => {
  const container = document.getElementById("podcastGrid");

  return {
    /**
     * Renders a list of podcast-preview components into the grid.
     * @param {Object[]} podcastList - Array of podcast objects.
     */
    render(podcastList) {
      container.innerHTML = "";
      podcastList.forEach((p) => {
        const preview = document.createElement("podcast-preview");
        preview.data = p; // Calls the setter in PodcastPreview.js
        //const card = createPodcastCard(p, createModal.open);//
        container.appendChild(preview);
      });
    },
  };
};
