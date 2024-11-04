"use client";

import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import styles from "./page.module.css";
import {useState} from "react";

export default function SideBarButton({ insideText, setSection, setSelectedMovie, firstItemToShow }) {

    // Uso de un counter auxiliar para que el comportamiento de foco en los botones del sidebar no empiece en los primeros
    // movimientos de navegación del usuario.
    const [counter, setCounter] = useState(0);

    const { ref, focused, focusSelf } = useFocusable({
        onFocus: el => {
            if ( counter > 0 ) el.node.scrollIntoView({behavior: "smooth", block: 'center' })
            setCounter( prevState => prevState + 1 )
        },
        onEnterPress: () => {
            if ( insideText !== 'Configuración' ) setSelectedMovie(firstItemToShow)
            setSection(insideText)
        }
    });

    const onClickHandler = () => {
        if ( insideText !== 'Configuración' ) setSelectedMovie(firstItemToShow)
        setSection(insideText)
        focusSelf()
    }

    return (
        <div ref={ref}
             className={focused ? styles.buttonFocused : styles.button}
             onClick={onClickHandler}
        >
            {insideText}
        </div>
    )
}