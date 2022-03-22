import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import Loading from "../components/Loading";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [movie,setMovie]=useState("");
    const [loading,setLoading] = useState(true);
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie.summary);
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(()=>{
        getMovie();
    },[]);

    return(
        <div className={styles.no}>
            {loading ? (<Loading/>) : (
                <div>
                    <img src={movie.medium_cover_image} atl="title"/>
                    <h2>
                        {movie.title}({movie.year})
                    </h2>
                    <div className={styles.things}>
                    <h2>
                        <p>
                            Rating : {movie.rating}
                        </p>
                        <p>
                            Runtime : {movie.runtime}
                        </p> 
                    </h2>
                    <div className={styles.summary}>
                        <h2>-Summary-</h2>
                        {movie.description_full}
                    </div>
                    </div>
                    <div>
                        <a href={movie.url} className={styles.Links}>Click For More Info</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Detail;