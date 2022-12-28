import { MovieGrid } from "./MovieGrid";
import movies from "../utils/movies.json"
import styles from "./GeneralGrid.module.css";
export function GeneralGrid(){
    return (
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                   <MovieGrid key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
}