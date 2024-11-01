import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

function MovieList({loading, error, movie, category}) {
    if (loading) return <div className='text-5xl flex justify-center items-center'>Loading...</div>;
    if (error) return <div>{error}</div>;
    return (
        <div className='w-4/5 m-auto flex flex-col'>
            <div className=' sm:mx-12 flex justify-between '>
                <p className='text-xl font-bold ml-1 sm:ml-12 '>Recommended Movies</p>
                <button className='sm:mr-12 text-red-500'>See more</button>
            </div>
            <div className='flex flex-row overflow-scroll pl-40 sm:pl-1 sm:flex-wrap  sm:overflow-hidden justify-center mt-4   '>
                {
                    movie && category ? movie.filter((m)=> m.Type === category).map((m, i) =>
                            <MovieCard
                                key={i}
                                image={m.Poster}
                                title={m.Title}
                                genre={m.Genre}
                                rating={m.imdbRating}
                            />
                        ): movie.map((m, i) =>
                                <MovieCard
                                    key={i}
                                    image={m.Poster}
                                    title={m.Title}
                                    genre={m.Genre}
                                    rating={m.imdbRating}
                                />
                            )
                }
            </div>
        </div>

    )
}

export default MovieList