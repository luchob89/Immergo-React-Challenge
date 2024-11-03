import styles from "@/app/page.module.css";
import Image from "next/image";

export default function MovieDetails ({ selectedMovie, openModal }) {

    if ( !selectedMovie ) return <div className={styles.movieDetails}></div>

    return (
        <div className={styles.movieDetails}>

            <div className={styles.movieData}>
                <div>
                    <h1>{selectedMovie.Title}</h1>
                    <h4>{selectedMovie.Year}</h4>
                    <h4>{selectedMovie.Genre}</h4>
                    <h5>{selectedMovie.Plot}</h5>
                </div>

                <div onClick={ () => { openModal(selectedMovie) }} className={styles.movieDetailsButton}>Ver Más</div>
            </div>
            <div className={styles.moviePoster}>
                <Image
                    src={selectedMovie.Poster}
                    fill={true}
                    alt={selectedMovie.Title}
                />
            </div>

        </div>
    )
}