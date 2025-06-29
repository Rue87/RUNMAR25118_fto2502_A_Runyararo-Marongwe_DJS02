# Web Component: Podcast Preview

This is a simple and interactive podcast preview component built using modern JavaScript. It uses a custom Web Component called `<podcast-preview>` to display each podcast as a card, showing the title, image, genres, number of seasons, and the last updated date.

You can use this component to show a list of podcasts, and when someone clicks on a card, more details can be shown in a modal or another part of your app.

## Project Overview

This project demonstrates how to create a modular, reusable, and interactive UI using Vanilla JavaScript. It emphasizes clean architecture with Single Responsibility Principle (SRP), object-oriented patterns, and component-based rendering.

Each podcast is displayed as a custom element, <podcast-preview>, which encapsulates structure, styling, and event behavior, ensuring reusability across the app.

## Technologies Used

- **HTML5** – Semantic structure and layout
- **CSS3** – Responsive layout and consistent component styling
- **JavaScript (ES6+)** – Modular and object-oriented structure
- **Custom Web Components** – <podcast-preview> encapsulates preview card logic
- **JSDoc** – Used across all modules for self-documenting code
- **Vanilla DOM API** – No frameworks or libraries

## Features Implemented

-  Podcast card grid using Web Component <podcast-preview>
-  Click-to-view modal with rich podcast details
-  Genre badge display (resolved from ID to name)
-  📺 Emoji for seasons and 📅 calendar for updated date
-  Genre dropdown filtering
-  Consistent card sizes for a clean layout
-  JSDoc documentation for all major functions and modules
-  Modular, maintainable code following SRP and OOP 

## How the Web Component Works

The <podcast-preview> Web Component is defined using the class extends HTMLElement syntax. When added to the DOM:

1. It receives podcast data via set data(podcast) method.

2. It uses the Shadow DOM to encapsulate internal styles and markup.

3. It renders the following within each card:

  - Podcast image

  - Title

  - Genre badges (resolved from genre IDs)

  - 📺 Season count

  - 📅 Human-readable updated date

4. It dispatches a custom show-modal event when clicked, sending the podcast data to the parent, which    then opens the modal with detailed info.

This approach allows full reusability, testability, and separation of concerns.

## User Guide

### Browsing & Interaction

- A grid of podcasts is displayed on load using the <podcast-preview> component.
- Each podcast card shows:
  - Title
  - Cover image
  - Genre tags
  - Season count (📺 icon included)
  - Last updated date (📅 with proper formatting)

### Viewing Podcast Details

- Click on any podcast card to open a modal.
- The modal displays:
  - Description
  - Full genre tags
  - List of seasons and number of episodes
  - Last updated date with 📅

## How to Run

1. **Clone or download** this repository.
2. Open index.html in a modern browser.
3. You’ll see a grid of podcast cards loaded using the component, click a card to trigger the modal event
4. No build step or external dependencies required.

## Challenges Faced

- Mapping genre IDs to readable names required careful separation of logic (solved using GenreService)
- Some podcasts had incomplete season data, leading to duplication in the modal.
- Date formatting needed to support both relative and absolute formats with fallback for invalid data
- Making all cards equal height required CSS tuning inside a shadow DOM
- Consistency across modules was achieved by implementing Prettier-style formatting and adding JSDoc

P.S. This project is open for colaboration. My contacts are just below.

## Contact

[Runyararo Marongwe/mrunya87@gmail.com] [https://github.com/Rue87]



