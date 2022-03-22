import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [movie,setMovie]=useState("");
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json.data.movie.summary);
        setMovie(json.data.movie);
    }
    useEffect(()=>{
        getMovie();
    },[]);

    return(
        <div className={styles.no}>
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
                    Genre : 
                    {/* {(movie.genres).map((genre)=>(<span key={genre}> {genre}</span>))} */}
                </h2>
                <div className={styles.summary}>
                    <h2>-Summary-</h2>
                    {movie.description_full}
                </div>
            </div>
        </div>
    )
}

export default Detail;