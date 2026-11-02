# CSE343 — Lab 5: Movie Watch List

A small React app based on the **Lab 5 PDF, page 27**.

## Lab requirements

1. Add and remove movies — done.
2. Add a comment/review to a movie — done.
3. Give each movie a star rating (1–5) — done.
4. Display the rating using star emojis — done.

## Run the app in VS Code

1. Install Node.js if it is not installed.
2. Open **this folder** in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install` (first time only).
5. Run `npm run dev`.
6. Open the **Local** URL from the terminal (usually http://localhost:5173/).

To stop the app, press Ctrl + C in the terminal.

**Do not just double-click `index.html`**: React with JSX must be processed by the development tool (Vite).

## Project structure

- `index.html`: contains the `<div id="root"></div>` where React runs.
- `src/main.jsx`: connects React's `App` to `root`.
- `src/App.jsx`: ALL the app's React code.
- `src/style.css`: all the visual styling.
- `package.json`: React, React DOM, and the Vite development tool.

## React concepts: only what Lab 5 teaches

- **Components**: `App`, `MovieCard`, and `RatingPicker` are normal functions returning JSX.
- **Props**: `movie`, `onDelete`, `rating`, and `onRate` pass data or callbacks to a component.
- **useState**: stores movies and form inputs; `setMovies` updates the screen.
- **map()**: draws the cards and the five stars.
- **Conditional rendering**: shows an empty message when there are no movies.
- **Event handlers**: `onClick`, `onChange`, `onSubmit` respond to users.
- **Spread and filter**: JavaScript array tools already seen in Lab 4.

There are no routers, databases, APIs, Redux, context, `useEffect`, or other advanced React features.

## Notes

- The two movies at startup are examples. Remove them if you want a blank list.
- The watch list only lives in React state, so refreshing the browser resets to the two examples. Persistence was **not covered in this lab**.
- The lab PDF says AI may help with styling but *not React-related work*. Use this React code as a study/reference example. Rebuild the React portion yourself before submitting coursework so you follow the lab's instructions.
