import {useState, useEffect} from "react";
import Switch from "../components/Switch";
import TableMovie from "../components/TableMovie";
import styles from "./TableView.module.css";
import Loading from "../components/Loading";

function TableView() {
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
      <div className={styles.part1}>
        {loading ? (<Loading/>) : (
        <div className={styles.part2}>
          {movies.map((movie)=>(
            <TableMovie
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
        <Switch
          place={false}
        />
      </div>  
  )
}

export default TableView;