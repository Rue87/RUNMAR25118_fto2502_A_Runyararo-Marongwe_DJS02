/**
 * @class PodcastPreview
 * @description Custom Web Component that renders a podcast card preview.
 * @extends HTMLElement
 *
 * @fires podcastClick - Dispatched when the card is clicked, sends full podcast data.
 */
export class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Lifecycle method called when the element is added to the DOM.
   * Triggers initial render.
   */
  connectedCallback() {
    this.render();
  }
  /**
   * Sets the podcast data and triggers a render.
   * @param {Object} podcast - The podcast object to render.
   * @param {string} podcast.title - Title of the podcast.
   * @param {string} podcast.image - URL for the cover image.
   * @param {string[]} podcast.genres - Array of genre names.
   * @param {string} podcast.updated - Formatted date string.
   * @param {number} podcast.seasons - Total number of seasons.
   */
  set data(podcast) {
    this._data = podcast;
    this.render();
  }

  /**
   * Renders the card UI into the component's shadow DOM.
   * Does nothing if no data is available.
   */
  render() {
    if (!this._data) return;

    const { title, image, genres, updated, seasons } = this._data;

    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: white;
          transition: transform 0.2s ease;
          height: 100%;
          justify-content: space-between;
        }
        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .cover {
          width : 100%;
          height: 160px;
          background-size: cover;
          background-position: center;
          margin bottom: 1rem;
        }
        .info {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
        }
        h2 {
          font-size: 1.1rem;
          margin: 0 0 0.5rem 0;
        }
        .seasons {
          font-size: 0.85rem;
          font-weight: 500;
          color: #333;
          margin-bottom: 0.4rem;
     }
        .tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.5rem;
        }
        .tag {
          background: #eef;
          padding: 0.3rem 0.6rem;
          border-radius: 5px;
          font-size: 0.75rem;
        }
        .updated {
          font-size: 0.75rem;
          color: #666;
        }
      </style>
       <div class="card">
        <div class="cover" style="background-image: url('${image}')"></div>
        <div class="info">
          <h2>${title}</h2>
          <div class="seasons">📺${seasons} ${
      seasons === 1 ? "season" : "seasons"
    }</div>
          <div class="tags">
            ${genres.map((g) => `<span class="tag">${g}</span>`).join("")}
          </div>
          <div class="updated">${updated}</div>
        </div>
      </div>
    `;

    // Emit event when card is clicked
    this.shadowRoot.querySelector(".card").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("podcastClick", {
          detail: this._data,
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

customElements.define("podcast-preview", PodcastPreview);
