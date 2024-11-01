import { useState , useEffect } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import CategoryBar from './components/CategoryBar'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import Carousel from './components/Carousel'


function App() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [searchValue, setSearchValue] = useState("movie")
  const [category, setCategory] = useState("")
  
  useEffect(() => {
    const movieResponse = async ( searchValue) => {
      setLoading(prev => !prev)

      try {
          const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&y=2023&apikey=${apiKey}`)
          const data = await response.json()
          if (data.Search.length > 0) {
            const movieListPromise = data.Search.slice(0, 5).map(async (d) => {
              const data = await fetch(`https://www.omdbapi.com/?i=${d.imdbID}&apikey=${apiKey}`)
              return await data.json()
            })
            const movieList = await Promise.all(movieListPromise)
            setMovie(movieList)
          }
      }
      catch {
        setError(error)
      }
      finally {
        setLoading(prev => !prev)
      }
    }
    movieResponse(searchValue);
  }, [searchValue, category,  apiKey])

  const  handleCategory = (value) => {
    setCategory(value)
  }
  return (
    <>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      <CategoryBar  handleCategory={handleCategory}/>
      <Carousel />
      <MovieList  loading={loading} error={error} movie={movie} category={category}/>
      <Footer />
    </>
  )
}

export default App
