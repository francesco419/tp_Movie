import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, CoverImg, title, genres, summary}){
    return(
    <div className={styles.hide}>
        <div>
            <img className={styles.imgbox} src={CoverImg} alt={title}/>
        </div>
        <div className={styles.MovieInfo}>
            <div className={styles.MovieDiv}>
                <div>
                    <h2><Link className={styles.Links} to={`/movie/${id}`}>{title}</Link></h2>
                    <p>-{summary.length>300 ? `${summary.slice(0,300)}...` : summary}</p>
                    <div>-Genres-</div>
                    <ul>
                        {genres.map((g)=>(<li key={g}>{g}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    CoverImg : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
        
export default Movie;