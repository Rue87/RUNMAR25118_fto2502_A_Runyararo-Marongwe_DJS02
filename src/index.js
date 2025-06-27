import { podcasts } from "./data.js";
import { createModal } from "./components/createModal.js";
import { createGrid } from "./views/createGrid.js";
import "./components/PodcastPreview.js";

/**
 * Initializes the podcast application.
 *
 * @principle SRP - Only responsible for application startup logic like event binding and rendering initial grid.
 */
function init() {
  document
    .getElementById("closeModal")
    .addEventListener("click", createModal.close);
  const grid = createGrid();
  grid.render(podcasts);

  // Listen for podcast preview clicks
  document.addEventListener("podcastClick", (e) => {
    createModal.open(e.detail);
  });
}

init();
