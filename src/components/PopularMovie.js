import React, { useEffect } from 'react'
import { AppContext } from './context'
import Moviecard from './Moviecard'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
const PopularMovie = () => {
    const { popular} = useContext(AppContext)
    return (
  
      <div className="container mt-5">
        <div className="movie-grid">
          {
            
            popular.map((popularmovie) => (
              <Moviecard key={popularmovie.id} movie={popularmovie} />
            ))
          }
        </div>
      </div>
    )
}

export default PopularMovie