# Movie Watchlist Manager

A simple React application built to practice state, events, conditional rendering, lists, keys, and derived state.

## Features

* Add movies with a title and genre
* Mark movies as watched / unwatched
* Filter movies by:

  * All
  * Watched
  * Unwatched
* Delete movies from the list
* View live statistics:

  * Total movies
  * Watched movies
  * Unwatched movies
* Conditional messages when:

  * No movies match the filter
  * All movies are watched

## Technologies Used

* React
* JavaScript (ES6)
* CSS
* React Hooks (`useState`)

## Concepts Practiced (Week 2)

This project demonstrates:

* State management using `useState`
* Event handling

  * `onChange`
  * `onSubmit`
  * `onClick`
* Rendering lists using `.map()`
* Using unique keys (`movie.id`)
* Conditional rendering
* Derived state

  * Filtered movies
  * Watched / unwatched counts
    *(computed during render, not stored in state)*

## Data Model

Each movie is stored as an object with the following structure:

```js
{
  id: "unique-id",
  title: "Inception",
  genre: "Action",
  watched: false
}
```

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/LailaRahman/movie-watchlist-new
   ```

2. Navigate into the project folder:

   ```bash
   cd movie-watchlist
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at:

   ```
   http://localhost:5173
   ```

   *(or the port shown in your terminal)*



## Author

**Laila Rahman**

