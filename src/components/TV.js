
import React, { useContext } from 'react'

import { AppContext } from './context'
import Moviecard2 from './Moviecard2'

const TV = () => {
    const { TV } = useContext(AppContext)
    return (
  
      <div className="container mt-5">
        <div className="movie-grid">
          {
            TV.map((movie) => (
              <Moviecard2 key={movie.id} movie={movie} />
            ))
          }
        </div>
      </div>
    )
}

export default TV