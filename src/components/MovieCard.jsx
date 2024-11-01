import React from 'react'
function MovieCard({
    image = "https://m.media-amazon.com/images/M/MV5BNmJhMTc5NDEtN2NkOC00Njc3LWJiMzgtZjhjZWNhZDhmZTE0XkEyXkFqcGc@._V1_SX300.jpg", 
    title = "Movie", 
    genre = "Drama",
    rating = "7.1/10", 

    }) {

    const link = "https://img.icons8.com/?size=50&id=MLMkQW8hDiAy&format=png&color=000000"
    return (
        <div>
             <div className="w-40 sm:w-1/2 md:w-52 h-full p-2 flex flex-col">
                <figure>
                    <img className="h-full w-full md:w-44 rounded-t-lg " src={image} alt="Product" />
                </figure>

                <figcaption className="flex flex-col flex-grow text-left  ">
                    <div className="flex rounded-b-lg bg-black md:w-44 p-2 " >
                        <img className="invert h-5 ml-1" src={link} alt="" />
                        <p className="ml-2 text-white">{rating} Rating</p>
                    </div>
                    <p className='text-2xl'><b>{title}</b></p>
                    <p>{genre}</p>
                </figcaption>
            </div>
        </div>
    )
}

export default MovieCard




   