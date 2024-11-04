"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';
import MovieItem from "@/app/movieItem";
import {useFocusable, FocusContext} from "@noriginmedia/norigin-spatial-navigation";
import {useEffect, useReducer, useState} from "react";

export default function MoviesSlide({ moviesArray, handleMovieHover, openModal, reverseOrder }) {

    const { ref, focusKey } = useFocusable();

    return (
        <FocusContext.Provider value={focusKey}>
            <div ref={ref} style={{'margin':'20px'}}>
                <Swiper
                    modules={[Scrollbar, Mousewheel]}
                    spaceBetween={15}
                    slidesPerView={7}
                    scrollbar={{ draggable: true }}
                >
                    {
                        moviesArray.map( movie => {
                            return (
                                <SwiperSlide key={movie.Title}>
                                    <MovieItem
                                        movie={movie}
                                        handleMovieHover={handleMovieHover}
                                        openModal={openModal}
                                    />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </FocusContext.Provider>
    );
};