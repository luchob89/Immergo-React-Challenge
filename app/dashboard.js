"use client";

import {init, useFocusable, FocusContext, setFocus} from '@noriginmedia/norigin-spatial-navigation';
import Sidebar from "@/app/sidebar";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import RestOfPage from "@/app/RestOfPage";
import PopUp from "@/app/popUp";
import Modal from "react-modal";

// Iniciamos la Navegación Espacial
init({
    debug: false,
    visualDebug: false,
    distanceCalculationMethod: 'center',
});

Modal.setAppElement('#root')

export default function Dashboard({ movieSlide1, movieSlide2, movieSlide3, movieSlide4, movieSlide5, movieSlide6 }) {

    // Variables de estado con su valor inicial y sus respectivos métodos de seteo
    const [selectedMovie, setSelectedMovie] = useState(movieSlide1[0]);
    const [section, setSection] = useState('Películas');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const { ref, focusKey, focusSelf } = useFocusable({
        isFocusBoundary: true,
    });

    // Funciones de handleos
    const handleMovieHover = movie => setSelectedMovie(movie);
    const openModal        = content => {
        setModalContent(content)
        setModalIsOpen(true)
    }
    const closeModal       = () => {
        setModalContent(null)
        setModalIsOpen(false)
        switch (section) {
            case 'Películas': return setFocus("sn:focusable-item-3");
            case 'Series': return setFocus("sn:focusable-item-4");
            case 'Destacados': return setFocus("sn:focusable-item-5");
            case 'Configuración': return setFocus("sn:focusable-item-6");
        }
    }

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
        <>
            <FocusContext.Provider value={focusKey}>
                <div ref={ref} className={styles.main}>
                    <Sidebar
                        setSection={setSection}
                        setSelectedMovie={setSelectedMovie}
                        firstItemToShow={firstItemsToShow}
                    />
                    <RestOfPage
                        movieSlide1={movieSlide1}
                        movieSlide2={movieSlide2}
                        movieSlide3={movieSlide3}
                        movieSlide4={movieSlide4}
                        movieSlide5={movieSlide5}
                        movieSlide6={movieSlide6}
                        selectedMovie={selectedMovie}
                        handleMovieHover={handleMovieHover}
                        section={section}
                        openModal={openModal}
                    />
                </div>
            </FocusContext.Provider>
            <PopUp
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                modalContent={modalContent}
            />
        </>
    );
}