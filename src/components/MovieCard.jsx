import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/movies/moviesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.movies.favorites);

  const isFavorite = favorites.some(fav => fav.id === movie.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="max-w-sm w-full rounded-lg overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full h-64 object-cover" src={movie.image} alt={movie.movie} />
      <div className="p-6">
        <div className="font-bold text-xl mb-2">{movie.movie}</div>
        <p className="text-gray-700 text-base mb-4">Rating: {movie.rating}</p>
        <button 
          className={`mb-4 ${isFavorite ? 'bg-red-500' : 'bg-blue-500'} text-white py-2 px-4 rounded-full flex items-center justify-center transition-all duration-300`} 
          onClick={handleFavoriteToggle}
        >
          <FontAwesomeIcon icon={isFavorite ? faHeartBroken : faHeart} className="mr-2" />
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
        <a 
          href={movie.imdb_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-blue-500 hover:text-blue-700 transition-all duration-300"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
