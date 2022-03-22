import {useState, useEffect} from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading,setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const getMovies = async()=>{
    const json = await (await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")).json();
    //const json=await response.json();
    setMovie(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
  },[])

  return (
    <div style="display:flex;">
      {loading ? (
          <h1> ...loading</h1>
          ) : (
            <div>
        {movies.map((movie)=>(
        <Movie
          CoverImg={movie.medium_cover_image}
          key={movie.id}
          id={movie.id}
          title={movie.title} 
          genres={movie.genres} 
          summary={movie.summary}
        />
        ))}
        </div>
      )}
    </div>
  )
}

export default Home;