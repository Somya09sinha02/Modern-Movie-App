import React from 'react'

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <div className="movieCard">
            <img
                src={poster_path ?
                    `https://image.tmdb.org/t/p/w500/${poster_path}` :
                    '/no-movie.png'}
                alt={title}
            />
            <div className="mt-4">
                <h3 className="text-white">{title}</h3>
                <div className="content flex items-center space-x-2 text-white text-sm">
                    <div className="rating flex items-center space-x-1">
                        <img src="star.svg" alt="star" className="w-4 h-4" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>

                    <span>•</span>
                    <p>{original_language ? original_language.toUpperCase() : 'N/A'}</p>

                    <span>•</span>
                    <p>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                </div>
            </div>

        </div>
    )
}

export default MovieCard
