import React, { useContext,useEffect } from 'react'
import Movies from './Movies'
import { AppContext } from './context'






const Home = () => {
  const {searchError} = useContext(AppContext)
  
  return (
    
   searchError.show? <p>nitin kumar</p>:<Movies />
  
    
  )
 
} 

export default Home