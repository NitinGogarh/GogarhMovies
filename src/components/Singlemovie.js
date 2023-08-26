import React, { useState, useEffect ,useContext} from 'react';
import { AppContext } from './context';
import { useParams } from 'react-router-dom';
import movieImage from './movie.png';


const Singlemovie = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  const params = useParams().id
  console.log(params)
  const {movie,searchdata,popular,GenreMovie,TV} = useContext(AppContext)
  const [movielist,setmovielist] = useState({});
  
  let findedmovie = movie.find(item => {
    return item.id == params;
  });
  
 
   if(!findedmovie)
   findedmovie = popular.find(item => {
    return item.id == params;
  });
  if(!findedmovie)
  findedmovie =  searchdata.find(item => {
    return item.id == params;
  });
   if(!findedmovie)
   findedmovie = GenreMovie.find(item => {
    return item.id == params;
  });
  if(!findedmovie)
  findedmovie = TV.find(item => {
   return item.id == params;
 });

  useEffect(() => {
    if(findedmovie)
    setmovielist(findedmovie);
  }, [findedmovie],[]);
  
  let name = movielist.original_title||movielist.original_name||movielist.name
  // console.log(name)
  return (
    <div id="main_card">
    <div id="card_left">
      <h1 id="title">{name}</h1>
      <p id="overview">{movielist.overview}</p>
      <p id="release_date">Released On: {movielist.release_date}</p>
      <p id="genres">Genres: Action, Drama, Thriller</p>
      <div id="button_container">
        <button id="download_btn">
          <i className="fas fa-download"></i> Download
        </button>
        <button id="trailer_btn">
          <i className="fas fa-play-circle"></i> Watch Trailer
        </button>
        <button id="rating_btn">
          <i className="fas fa-star"></i> {movielist.vote_average}
        </button>
      </div>
    </div>
    <div id="card_right">
    <img src={movielist.poster_path?IMG_URL+movielist.poster_path:movieImage} className="card-img-top" alt={movie.name} />
    </div>
  </div>
  
  );
};

export default Singlemovie