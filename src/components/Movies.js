import React, { useContext } from 'react'

import { AppContext } from './context'
import Moviecard from './Moviecard'

const Movies = () => {


  const { movie } = useContext(AppContext)

  return (
   
    
    <div className="container mt-5">
    
      <div className="movie-grid">
        {
          movie.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </div>
   
  )
}

export default Movies