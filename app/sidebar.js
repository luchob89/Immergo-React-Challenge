"use client";

import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import SidebarButton from './sidebarButton';
import styles from "./page.module.css";

export default function Sidebar({ setSection, setSelectedMovie, firstItemToShow }) {

    const { ref, focusKey } = useFocusable();

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.sidebar}>
                <div style={{flexGrow: 0.7}}>
                    <SidebarButton insideText={'Películas'} setSection={setSection} setSelectedMovie={setSelectedMovie} firstItemToShow={firstItemToShow.Peliculas} />
                    <SidebarButton insideText={'Series'} setSection={setSection} setSelectedMovie={setSelectedMovie} firstItemToShow={firstItemToShow.Series} />
                    <SidebarButton insideText={'Destacados'} setSection={setSection} setSelectedMovie={setSelectedMovie} firstItemToShow={firstItemToShow.Destacados} />
                </div>
                <SidebarButton insideText={'Configuración'} setSection={setSection} firstItemToShow={firstItemToShow.Configuracion} />
            </div>
        </FocusContext.Provider>
    )
}