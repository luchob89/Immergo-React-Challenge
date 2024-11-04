import styles from "@/app/page.module.css";
import MovieDetails from "@/app/movieDetails";
import MoviesSlide from "@/app/moviesSlide";
import {useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import DestacadosGrid from "@/app/destacadosGrid";
import Configuracion from "@/app/configuracion";

export default function RestOfPage({ movieSlide1, movieSlide2, movieSlide3, movieSlide4, movieSlide5, movieSlide6, selectedMovie, handleMovieHover, section, openModal }) {

    const { ref, focusKey  } = useFocusable();

    // Películas
    if ( section === 'Películas' ) return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.rightContent}>
                <MovieDetails selectedMovie={selectedMovie} openModal={openModal} />
                <MoviesSlide moviesArray={movieSlide1} handleMovieHover={handleMovieHover} openModal={openModal} />
                <MoviesSlide moviesArray={movieSlide2} handleMovieHover={handleMovieHover} openModal={openModal} />
                <MoviesSlide moviesArray={movieSlide3} handleMovieHover={handleMovieHover} openModal={openModal} />
            </div>
        </FocusContext.Provider>
    )

    // Series
    if ( section === 'Series' ) return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.rightContent}>
                <MovieDetails selectedMovie={selectedMovie} openModal={openModal} />
                <MoviesSlide moviesArray={movieSlide4} handleMovieHover={handleMovieHover} openModal={openModal} />
                <MoviesSlide moviesArray={movieSlide5} handleMovieHover={handleMovieHover} openModal={openModal} />
            </div>
        </FocusContext.Provider>
    )

    // Destacados
    if ( section === 'Destacados' ) return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.rightContent}>
                <DestacadosGrid movieSlide6={movieSlide6} handleMovieHover={handleMovieHover} openModal={openModal} />
            </div>
        </FocusContext.Provider>
    )

    // Configuración
    if ( section === 'Configuración' ) return <Configuracion />

    return null;
}