import movie from "../utils/movie_details.json";
import styles from "./MovieDetails.module.css";
export function MovieDetails(){
    const url = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (<div className={styles.detailsContainer}>
        <img className={`${styles.col} ${styles.movieImage}`} src={url} alt="" />
        <div className={`${styles.col} ${styles.detailsText}`}>
            <p><strong>Title: </strong>{movie.title}</p>
            <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
            <p><strong>Description: </strong>{movie.overview}</p>

        </div>
    </div>);
}