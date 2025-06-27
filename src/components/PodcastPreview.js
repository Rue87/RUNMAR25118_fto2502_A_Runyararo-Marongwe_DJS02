export class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }
   set data(podcast) {
    this._data = podcast;
    this.render();
  }
  render() {
    if (!this._data) return;

    const { title, image, genres, updated,seasons } = this._data;

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
        }
        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .cover {
          height: 160px;
          background-size: cover;
          background-position: center;
        }
        .info {
          padding: 1rem;
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
          <div class="seasons">${seasons} ${seasons === 1 ? "season" : "seasons"}</div>
          <div class="tags">
            ${genres.map(g => `<span class="tag">${g}</span>`).join("")}
          </div>
          <div class="updated">${updated}</div>
        </div>
      </div>
    `;
  }
}

customElements.define("podcast-preview", PodcastPreview);
