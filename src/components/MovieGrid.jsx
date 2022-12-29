import { Link } from "react-router-dom";
import styles from "./MovieGrid.module.css";
export function MovieGrid({ movie }) {
    const url = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" + movie.id} >
                <div>
                    <img className={styles.movieImage} src={url} alt={movie.title} width={230} height={345} />
                </div>
                <div>
                    {movie.title}
                </div>
            </Link>
        </li>
    );
}