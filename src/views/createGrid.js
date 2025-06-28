//import { createPodcastCard } from "../components/createPodcastCard.js";
import { createModal } from "../components/createModal.js";
import { GenreService } from "../utils/GenreService.js";
import { DateUtils } from "../utils/DateUtils.js";
import { SeasonService } from "../utils/seasonService.js";
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
        preview.data = {
          ...p,
          genres: GenreService.getNames(p.genres),
          genreIds: p.genres,
          updated: DateUtils.format(p.updated),
          rawUpdated: p.updated, 
          seasons: SeasonService.count(p.id),
        };
        //Handle podcastClick from component
preview.addEventListener("podcastClick", (e) => {
  const podcastData = e.detail;
  // openModal(e.detail); 
  createModal.open(preview._data);
})
 container.appendChild(preview);
      });
    }};
};

  




        /*const genreNames = GenreService.getNames(p.genres);
        
        const updatedDate = DateUtils.format(p.updated);

        
        preview.data = p; // Calls the setter in PodcastPreview.js
        preview.genres = genreNames,// Pass genre names, not IDs
        preview.updated = updatedDate,
        preview.seasons = p.seasons?.length || 1, 

        //const card = createPodcastCard(p, createModal.open);//
        container.appendChild(preview);
      });
    },
  };
};*/
