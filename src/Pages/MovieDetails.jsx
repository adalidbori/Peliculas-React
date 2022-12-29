import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
export function MovieDetails() {

    const { movieId } = useParams();//useParams() -> Hook para obtener datos por parametro, el nombre del dato lo creamos en la clase App.jsx
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/" + movieId, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njc5ODExMzU3YjY1ZmIwNDQ1MTMwMDZjMDcyZDNhMCIsInN1YiI6IjYzYWRlYmEyYzU2ZDJkMDBkODQxZDQzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCI1_xLI2h3cPK3P5qguVM32AetBPwAt-F6jf7AIbzQ',
                "Content-Type": "application/json;charset=utf-8",
            }
        }).then(result => result.json()).then(data => {
            setMovie(data)
        })
    }, [movieId]);
    if (!movie) {
        return null;
    }
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