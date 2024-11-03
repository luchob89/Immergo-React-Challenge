"use client";

import {init, useFocusable, FocusContext} from '@noriginmedia/norigin-spatial-navigation';
import Sidebar from "@/app/sidebar";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import RestOfPage from "@/app/RestOfPage";
import PopUp from "@/app/popUp";

// Iniciamos la Navegación Espacial
init({
    debug: false,
    visualDebug: false,
});

export default function Dashboard({ movieSlide1, movieSlide2, movieSlide3, movieSlide4, movieSlide5, movieSlide6 }) {

    // Variables de estado con su valor inicial y sus respectivos métodos de seteo
    const [selectedMovie, setSelectedMovie] = useState(movieSlide1[0]);
    const [section, setSection] = useState('Películas');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [reverseOrder, setReverseOrder] = useState(false);

    const { ref, focusKey, focusSelf } = useFocusable();

    // Funciones de handleos
    const handleMovieHover = movie => setSelectedMovie(movie);
    const openModal        = content => {
        setModalContent(content)
        setModalIsOpen(true)
    }
    const closeModal       = () => {
        setModalContent(null)
        setModalIsOpen(false)
    }
    const handleReverse = rtl => setReverseOrder(rtl)

    // Foco en el primer componente focusable ("Películas" del sidebar)
    useEffect(() => {
        focusSelf();
    }, [focusSelf]);

    // Informacipon de qué película estará elegida primero por cada página
    let firstItemsToShow = {
        Peliculas: movieSlide1[0],
        Series: movieSlide4[0],
        Destacados: movieSlide6[0],
        Configuracion: movieSlide1[0],
    }

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.main} id={'root'}>
                <Sidebar
                    setSection={setSection}
                    setSelectedMovie={setSelectedMovie}
                    firstItemToShow={firstItemsToShow}
                />
                <RestOfPage
                    movieSlide1={reverseOrder? movieSlide1.reverse() : movieSlide1}
                    movieSlide2={movieSlide2}
                    movieSlide3={movieSlide3}
                    movieSlide4={movieSlide4}
                    movieSlide5={movieSlide5}
                    movieSlide6={movieSlide6}
                    selectedMovie={selectedMovie}
                    handleMovieHover={handleMovieHover}
                    section={section}
                    openModal={openModal}
                    reverseOrder={reverseOrder}
                    setReverseOrder={handleReverse}
                />
            </div>
            <PopUp
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                modalContent={modalContent}
            />
        </FocusContext.Provider>
    );
}