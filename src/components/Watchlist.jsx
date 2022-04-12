import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Ver mas Tarde </h1>

          <span className="count-pill">
            {watchlist.length}{' '}
            {watchlist.length === 1 ? 'Pelicula' : 'Peliculas'}
          </span>
        </div>
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <>
            <h2 className="no-movies">No hay peliculas en tu lista 😞</h2>
            <Link to="/add">
              <button className="btn center">AGREGAR</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
