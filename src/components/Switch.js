import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import styles from "./Switch.module.css";

function Switch({place}){
    return (
        <button className={styles.icon} alt="Change View">
            <Link to={place ? `/movie/tableview` : `/tp_Movie`}>
                <FontAwesomeIcon icon={faRepeat} className={styles.fai} size="2x"/>
            </Link>
        </button>
    )
}

export default Switch;