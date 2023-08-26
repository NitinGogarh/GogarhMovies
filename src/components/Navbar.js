import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { AppContext } from './context';
const Navbar = () => {
  const {setgenres,setGenreMovie,setgenrespage} = useContext(AppContext)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGenreClick = (genreId) => {
    scrollToTop();
    setGenreMovie([])
    setgenrespage(1);
    setgenres(genreId);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-info px-5">
      <Link className="gogarh-movies navbar-brand" to="/" onClick={scrollToTop}>Gogarh Movies</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={scrollToTop}>
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item" >
            <Link className="nav-link" to="/popular" onClick={scrollToTop} >Popular</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Genres
            </Link>
            
            <div className="dropdown-menu bg-dark  " aria-labelledby="navbarDropdown"   style={{ opacity: '0.9', color: 'white'  }}>
              <Link className="dropdown-item  custom-item" to={`genres/${28}`} onClick={() => handleGenreClick(28)}>Action</Link>
              <Link className="dropdown-item custom-item" to={`genres/${12}` } onClick={() => handleGenreClick(12)} >Adventure</Link>
              <Link className="dropdown-item custom-item" to={`genres/${16}`} onClick={() => handleGenreClick(16)}  >Animation</Link>
              <Link className="dropdown-item custom-item" to={`genres/${10402}` }  onClick={() => handleGenreClick(10402)}>Music</Link>
              <Link className="dropdown-item custom-item" to={`genres/${80}`} onClick={() => handleGenreClick(80)}>Crime</Link>
              <Link className="dropdown-item custom-item" to={`genres/${99}`} onClick={() => handleGenreClick(99)}>Documentry</Link>
              <Link className="dropdown-item custom-item" to={`genres/${35}`} onClick={() => handleGenreClick(35)}>Comedy</Link>
              <Link className="dropdown-item custom-item" to={`genres/${14}`} onClick={() => handleGenreClick(14)}>Fantasy</Link>
              <Link className="dropdown-item custom-item" to={`genres/${36}`} onClick={() => handleGenreClick(36)}>History</Link>
              <Link className="dropdown-item custom-item" to={`genres/${10749}`} onClick={() => handleGenreClick(10749)} >Romance</Link>
              <Link className="dropdown-item custom-item" to={`genres/${27}`} onClick={() => handleGenreClick(27)}>Horror</Link>
              <Link className="dropdown-item custom-item" to={`genres/${10752}`} onClick={() => handleGenreClick(10752)}>War</Link>
              <Link className="dropdown-item custom-item" to={`genres/${53}`} onClick={() => handleGenreClick(53)}>Thriller</Link>
              <Link className="dropdown-item custom-item" to={`genres/${878}`} onClick={() => handleGenreClick(878)}>Science Fiction</Link>
              <Link className="dropdown-item custom-item" to={`genres/${9648}`} onClick={() => handleGenreClick(9648)}>Mystery</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/TvShows"  onClick={scrollToTop}>Tv-shows</Link>
          </li>
        </ul>
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
