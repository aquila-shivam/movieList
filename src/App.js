import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import FavoritesList from './components/FavoritesList';

function App() {
  return (
    <Router>
      <div className="container mx-auto px-4">
        <Routes>
          <Route exact path="/" element={<MoviesList />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
