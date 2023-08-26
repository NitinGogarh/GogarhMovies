import React, { useState, useContext } from 'react';
import { AppContext } from './context';
import { Link } from 'react-router-dom';

const Search = () => {
  const { query, setquery, searchError, setSearchmovie,submit,setsubmit,searchpage,setsearchpage} = useContext(AppContext);
  

  const handleChange = (e) => {
    setsearchpage(1);
    window.scrollTo({ top: 0 });
    setquery(e.target.value);
  };

  const handleSubmit = (e) => {
    setsearchpage(1);
     e.preventDefault();                    // Clear previous search results
    window.scrollTo({ top: 0 });
    
  };

  
  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <div className="d-flex">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
          value={query}
        />
        <Link to={`movies/${query}`}>
        <div className="btn btn-outline-success" type = "submit">
          Search
        </div>
        </Link>
      </div>
    </form>
  );
};

export default Search;
