import {useState, useEffect} from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "./Home.module.css";
import Switch from "../components/Switch";


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

  const [move,setMove] = useState(0);
  const MoveToReft = () => move===0 ? setMove(move => -19190) : setMove(move => move+1010);
  const MoveToLeft = () => move===-19190 ? setMove(move => 0) : setMove(move => move-1010);

  return (
      <div>
        <div className={styles.totalbox}>
            <div className={styles.container1}>
                <div>
                    {loading ? (<Loading/>) : (
                    <div className={styles.container3}
                    style={{transform: `translateX(${move}px)`, transition:`transform 1.5s`}} >
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
            </div>
            <div className={styles.buttondiv}>
                <button className={styles.slidebutton} onClick={MoveToReft}>Prev</button>
                <button className={styles.slidebutton} onClick={MoveToLeft}>Next</button>
            </div>
        </div>
        <Switch
        place={true}
        />
      </div>
  )
}

export default Home;