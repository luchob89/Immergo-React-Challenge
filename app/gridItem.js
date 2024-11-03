import styles from "@/app/page.module.css";
import Image from "next/image";
import {useFocusable} from "@noriginmedia/norigin-spatial-navigation";

export default function GridItem ({ destacado, handleMovieHover, openModal }) {

    const { ref, focused, focusSelf } = useFocusable({
        onFocus: el => {
            el.node.scrollIntoView({behavior: "smooth"})
            handleMovieHover(destacado);
        },
        onEnterPress: () => openModal(destacado)
    });

    const onClickHandler = el => {
        handleMovieHover(destacado)
        focusSelf()
        openModal(destacado)
    }

    return (
        <div ref={ref}
             key={destacado.Title}
             className={focused? styles.gridItemFocused : styles.gridItem}
             onClick={ e => onClickHandler(e) }
        >
            <Image
                src={destacado.Poster}
                fill={true}
                alt={destacado.Title}
                style={{borderRadius: '10px'}}
            />
        </div>
    )
}