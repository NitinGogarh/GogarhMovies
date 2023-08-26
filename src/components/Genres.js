import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './context';
import Moviecard from './Moviecard';
import { useParams } from 'react-router-dom';

const Genres = () => {
  const params = useParams();
  const { GenreMovie,GenreLoading} = useContext(AppContext);
  return (
    GenreLoading?<div>Loading......</div>:
    <div className="container mt-5">
      {
        <div className="movie-grid">
          {GenreMovie.map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
      }
    </div>
  );
};

export default Genres;
