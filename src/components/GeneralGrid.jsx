import { MovieGrid } from "./MovieGrid";
import styles from "./GeneralGrid.module.css";
import { useEffect, useState } from "react";
export function GeneralGrid() {
    
    const [movies, setMovies] = useState([]) // useState() hook para detectar cambios en el componente y volverlo a cargar
    useEffect(() => {//efecto secundario para que se cargue despues del return
        fetch("https://api.themoviedb.org/3/discover/movie", {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njc5ODExMzU3YjY1ZmIwNDQ1MTMwMDZjMDcyZDNhMCIsInN1YiI6IjYzYWRlYmEyYzU2ZDJkMDBkODQxZDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCI1_xLI2h3cPK3P5qguVM32AetBPwAt-F6jf7AIbzQ',
                "Content-Type": "application/json;charset=utf-8",
            }
        }).then(result => result.json()).then(data => {
            setMovies(data.results);
        });
    }, []);
    return (
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map(movie => (
                    <MovieGrid key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
    );
}