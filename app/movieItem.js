'use client';

import styles from "./page.module.css";
import Image from 'next/image';
import {useFocusable} from "@noriginmedia/norigin-spatial-navigation";

export default function MovieItem({ movie, handleMovieHover, openModal }) {

    // Componente focusable
    const { ref, focused, focusSelf } = useFocusable({
        onFocus: el => {
            el.node.scrollIntoView({behavior: "smooth"}) // Scroll a la vista
            handleMovieHover(movie);
        },
        onEnterPress: () => openModal(movie)
    });

    const onClickHandler = el => {
        handleMovieHover(movie)
        focusSelf()
        if ( el.target.parentNode.className === 'page_movieItemFocused__GL36r' ) openModal(movie)
    }

    return (
        <div ref={ref}
             onClick={ e => {
                 e.target.scrollIntoView({behavior: "smooth"})
                 onClickHandler(e)
                }
             }
             className={focused ? styles.movieItemFocused : styles.movieItem}
        >
            <Image
                src={movie.Poster}
                fill={true}
                alt={movie.Title}
                style={{borderRadius: '10px'}}
            />
        </div>
    )
}