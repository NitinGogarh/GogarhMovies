import { createContext, useEffect, useState } from "react";
const AppContext = createContext();

   const AppProvider = ({ children }) => {
  //All usestates
  const [allmovie, setallMovie] = useState([]);
  const [isloading, setIsLoading] = useState(true)
  const [TVLoading, setTVLoading] = useState(true)

  const [Error, setError] = useState({ show: false, msg: "" })
  const [searchError, setsearchError] = useState({ show: false, msg: "" })
  const [page, setpage] = useState(1);
  const [TVpage, setTVpage] = useState(1);
  const [searchdata, setsearchdata] = useState([]);
  const [TV, setTV] = useState([]);
  const [popularpage, setpopularpage] = useState(1);
  const [searchpage, setsearchpage] = useState(1);
  const [genrespage, setgenrespage] = useState(1);
  const [popularMovie, setPopularMovie] = useState([]);
  const [GenreMovie,setGenreMovie] = useState([]);
  const [genres,setgenres] = useState("12");
  const [query, setquery] = useState("")
  const [submit, setsubmit] = useState(false)
  const [GenreLoding, setGenreLoading] = useState(true)




  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=20a98f9d0bee5a7e0d97a63a91379234&page=${page}`
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setIsLoading(false);
        setallMovie((prev) => ([...prev, ...data.results]))
      } catch (error) {
        setError({ show: true, msg: "Error fetching data" });
      }
    }
    fetchData()
  }, [page])

  useEffect(() => {
    const Popular_url = `https://api.themoviedb.org/3/trending/movie/day?api_key=20a98f9d0bee5a7e0d97a63a91379234&page=${popularpage}`

    const fetchData = async () => {
      try {
        const response = await fetch(Popular_url);
        const data = await response.json();
        setIsLoading(false);
        setPopularMovie((prev) => ([...prev, ...data.results]))
      } catch (error) {
        setError({ show: true, msg: "Error fetching data" });
      }
    }
    fetchData()
  }, [popularpage])


  useEffect(() => {
    setsearchError({ show: false, msg: "Error fetching data" });
    const Search_URL = `https://api.themoviedb.org/3/search/movie?&api_key=20a98f9d0bee5a7e0d97a63a91379234&query=${query}&page=${searchpage}`
    const fetchData = async () => {
      try {
        const response = await fetch(Search_URL);
        const data = await response.json();
        setIsLoading(false);
        setsearchdata([])
        setsearchdata(data.results)
      } catch (error) {
        setsearchError({ show: true, msg: "Error fetching data" });
      }
    }
    fetchData()
  }, [query], [searchpage])



  useEffect(() => {
    setsearchError({ show: false, msg: "Error fetching data" });
    const Search_URL = `https://api.themoviedb.org/3/search/movie?&api_key=20a98f9d0bee5a7e0d97a63a91379234&query=${query}&page=${searchpage}`
    const fetchData = async () => {
      try {
        const response = await fetch(Search_URL);
        const data = await response.json();
        setIsLoading(false);
        
        setsearchdata((prev) => ([...prev, ...data.results]))
      } catch (error) {
        setsearchError({ show: true, msg: "Error fetching data" });
      }

    }
    fetchData()
  }, [searchpage])

  useEffect(() => {
    setsearchError({ show: false, msg: "Error fetching data" });
    const Search_URL = `https://api.themoviedb.org/3/search/tv?&api_key=20a98f9d0bee5a7e0d97a63a91379234&query=${query}&page=${searchpage}`
    const fetchData = async () => {
      try {
        const response = await fetch(Search_URL);
        const data = await response.json();
        setIsLoading(false);
        
        setsearchdata((prev) => ([...prev, ...data.results]))
      } catch (error) {
        setsearchError({ show: true, msg: "Error fetching data" });
      }

    }
    fetchData()
  },  [query],[searchpage])


  useEffect(() => {
    const GENRES_URL = `https://api.themoviedb.org/3/discover/movie/?api_key=20a98f9d0bee5a7e0d97a63a91379234&page=${genrespage}&with_genres=${genres}`
    const fetchData = async () => {
      try {
        const response = await fetch(GENRES_URL);
        const data = await response.json();
        setGenreLoading(false);
        setGenreMovie((prev) => ([...prev, ...data.results]))
      } catch (error) {
        setError({ show: true, msg: "Error fetching data" });
      }
    }
    fetchData()
  }, [genrespage,genres])


  useEffect(() => {
    const TV_URL = `https://api.themoviedb.org/3/discover/tv/?api_key=20a98f9d0bee5a7e0d97a63a91379234&page=${TVpage}`
    const fetchData = async () => {
      try {
        const response = await fetch(TV_URL);
        const data = await response.json();
        setTVLoading(false);
        setTV((prev) => ([...prev, ...data.results]))
      } catch (error) {
        setError({ show: true, msg: "Error fetching data" });
      }
    }
    fetchData()
  }, [TVpage])


  const handlescroll = () => {
    try {
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight
      const topHeight = document.documentElement.scrollTop

      if (windowHeight + topHeight + 1 >= totalHeight) {

        setIsLoading(true)
        setGenreLoading(true)
        setpopularpage((prev) => (prev + 1));
        setpage((prev) => (prev + 1));
        setsearchpage((prev) => (prev + 1))
        setgenrespage((prev)=>(prev+1));
        setTVpage((prev)=>(prev+1));
      }
    }
    catch (error) {
      return error
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handlescroll)
    return () => { window.removeEventListener('scroll', handlescroll); }
  }, [])







  return (
    <AppContext.Provider value={{ movie: allmovie, popular: popularMovie, query: query, setquery: setquery, searchError: searchError, 
    Error: Error, searchdata: searchdata, submit: submit, setsubmit: setsubmit, 
    searchpage: searchpage, setsearchpage: setsearchpage ,genres:genres,setgenres:setgenres,GenreMovie:GenreMovie,setGenreMovie:setGenreMovie,
    GenreLoding:GenreLoding,setgenrespage:setgenrespage,TV:TV}}>

      {/* Your JSX content here */}


      {children}
      {TVLoading?<div>Loading...</div>:isloading && <h2 style={{ textAlign: "center" }}>loading......</h2>}


    </AppContext.Provider>
  )
}
export { AppContext, AppProvider };