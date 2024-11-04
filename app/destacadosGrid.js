import styles from "@/app/page.module.css";
import {useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import GridItem from "@/app/gridItem";

export default function DestacadosGrid ({ movieSlide6, handleMovieHover, openModal }) {

    const { ref, focusKey } = useFocusable();

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} className={styles.destacadosGrid}>
                {
                    movieSlide6.map ( destacado => {
                        return <GridItem key={destacado.Title} destacado={destacado} handleMovieHover={handleMovieHover} openModal={openModal} />
                    })
                }
            </div>
        </FocusContext.Provider>
    )
}