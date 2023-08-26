import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context'
import Moviecard from './Moviecard'
import Moviecard2 from './Moviecard2'
const SearchedResult = () => {
   
    const { Error, searchdata, searchError,isLoading } = useContext(AppContext);

  // Conditional rendering based on data availability
  
  return (
       
    <div className="container mt-5">
    {isLoading ? (
      <p>Loading...</p>
    ) : searchdata.length ? (
      <div className="movie-grid">
        {searchdata.map((movie) =>
          movie.hasOwnProperty('original_title') ? (
            <Moviecard key={movie.id} movie={movie} />
          ) : (
            <Moviecard2 key={movie.id} movie={movie} />
          )
        )}
      </div>
    ) : (
      <p>No Result Found</p>
    )}
  </div>
  )
}

export default SearchedResult