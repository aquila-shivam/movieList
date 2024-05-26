import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoritesList = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  if (favorites.length === 0) {
    return <div className="text-center text-gray-500 mt-8">No favorites added yet.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Favorite List</h1>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" />
          <span className="text-xl font-bold">{favorites.length}</span>
        </div>
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Home
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
