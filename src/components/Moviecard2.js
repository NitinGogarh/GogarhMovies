import React from 'react';
import { NavLink } from 'react-router-dom';
import movieImage from './movie.png'; // Replace './movie.png' with the actual path to the image

const Moviecard2 = ({ movie }) => {
  const { original_name } = movie;
  const newtitle = original_name.length > 15 ? original_name.substring(0, 15) + '...' : original_name;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <NavLink to={`movie/${movie.id}`} className="navlink">
      <div className="card mb-3">
        {/* Use the imported movieImage variable as the src */}
        <div className='image'>
        <img src={movie.poster_path?IMG_URL+movie.poster_path:movieImage} className="card-img-top" alt={movie.original_title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{newtitle}</h5>
          <p className="card-text">{/* Add content here */}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Moviecard2;