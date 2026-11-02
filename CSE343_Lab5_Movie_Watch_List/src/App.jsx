import React, { useState } from "react";
// A reusable component for choosing 1 to 5 stars.
function RatingPicker({ rating, onRate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-picker">
      {stars.map((star) => (
        <button
          key={star}
          type="button"
          className="star-button"
          onClick={() => onRate(star)}
          aria-label={"Choose " + star + (star === 1 ? " star" : " stars")}
        >
          {star <= rating ? "⭐" : "☆"}
        </button>
      ))}
    </div>
  );
}

// This component receives movie data and a delete function through props.
function MovieCard({ movie, onDelete }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="movie-card">
      <div className="movie-card-top">
        <div>
          <h3>{movie.title}</h3>
          <div className="movie-rating" aria-label={movie.rating + " out of 5 stars"}>
            {stars.map((star) => (
              <span key={star} aria-hidden="true">
                {star <= movie.rating ? "⭐" : "☆"}
              </span>
            ))}
            <span className="rating-number">{movie.rating}/5</span>
          </div>
        </div>
        <button className="delete-button" onClick={onDelete} type="button">
          Remove
        </button>
      </div>
      <p className="review-label">MY REVIEW</p>
      <p className="movie-review">{movie.review}</p>
    </div>
  );
}

export default function App() {
  // useState stores the list and the three form values.
  const [movies, setMovies] = useState([
    { title: "Interstellar", review: "Amazing story and music.", rating: 5 },
    { title: "Inside Out", review: "Fun movie with a great message.", rating: 4 }
  ]);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  function addMovie(event) {
    event.preventDefault();

    if (title.trim() === "" || review.trim() === "" || rating === 0) {
      return;
    }

    const newMovie = {
      title: title.trim(),
      review: review.trim(),
      rating: rating
    };

    // Spread creates a new array containing old movies and the new movie.
    setMovies([...movies, newMovie]);
    setTitle("");
    setReview("");
    setRating(0);
  }

  function removeMovie(index) {
    // filter returns a new array without the selected movie.
    setMovies(movies.filter((movie, i) => i !== index));
  }

  return (
    <main className="page">
      <header className="header">
        <div className="brand"><span className="brand-icon">🎬</span> MOVIE JOURNAL</div>
        <h1>My Movie Watch List</h1>
        <p>Keep track of the movies you have watched, rate them, and write a short review.</p>
      </header>

      <div className="content">
        <section className="panel add-panel" aria-labelledby="add-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR NEXT ENTRY</p>
              <h2 id="add-heading">Add a movie</h2>
            </div>
            <span className="heading-emoji">🍿</span>
          </div>

          <form onSubmit={addMovie}>
            <label htmlFor="movie-title">Movie title</label>
            <input
              id="movie-title"
              type="text"
              placeholder="e.g. The Lion King"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />

            <label htmlFor="movie-review">Your review</label>
            <textarea
              id="movie-review"
              rows="4"
              placeholder="What did you think of this movie?"
              value={review}
              onChange={(event) => setReview(event.target.value)}
              required
            ></textarea>

            <label>Your rating</label>
            <RatingPicker rating={rating} onRate={setRating} />
            <p className="rating-hint">
              {rating === 0 ? "Select a star rating to continue." : "You selected " + rating + " out of 5 stars."}
            </p>

            <button className="add-button" type="submit" disabled={rating === 0}>
              + Add to watch list
            </button>
          </form>
        </section>

        <section className="watchlist-section" aria-labelledby="watchlist-heading">
          <div className="watchlist-heading">
            <div>
              <p className="eyebrow">YOUR COLLECTION</p>
              <h2 id="watchlist-heading">Watched movies</h2>
            </div>
            <span className="movie-count">{movies.length} {movies.length === 1 ? "movie" : "movies"}</span>
          </div>

          {movies.length === 0 ? (
            <div className="panel empty-state">
              <div className="empty-emoji">🎞️</div>
              <h3>No movies yet</h3>
              <p>Add your first movie using the form.</p>
            </div>
          ) : (
            <div className="movie-list">
              {movies.map((movie, index) => (
                <MovieCard
                  key={index}
                  movie={movie}
                  onDelete={() => removeMovie(index)}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      <footer>CSE343 · Web Development · Lab 5</footer>
    </main>
  );
}
