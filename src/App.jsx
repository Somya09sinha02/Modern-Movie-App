import Search from './assets/Components/Search.jsx';
import { useState, useEffect } from "react";
import Spinner from "./assets/Components/Spinner.jsx";
import MovieCard from "./assets/Components/MovieCard.jsx";
import {useDebounce} from "react-use"
import { getTrendingMovies, updateSearchCount } from './appwrite.js'
import {jquery} from "globals";

const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        Authorization: 'Bearer ' + API_KEY

    }
};

console.log("TMDB Token from .env:", API_KEY);


const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const initialState = [];
    const [trendingMovies, setTrendingMovies] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    //debounce the search term to prevent making too many API Requests
    //by waiting for the user to stop typing for 500ms
    useDebounce(() => {
        setDebouncedSearchTerm(searchTerm);
    }, 500, [searchTerm]);

    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            if (!response.ok) {
                throw new Error('Failed to fetch movies');
            }

            const data = await response.json();

            if (data.response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch movies');
                setMovieList([]);
                return;
            }

setMovieList(data.results || []);
             if (query && data.results.length >0){
                await updateSearchCount(query,data.results[0]);
            }



        } catch (error) {
            console.log(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const loadTrendingMovies = async() => {
        try{
            const movies = await getTrendingMovies();
            setTrendingMovies(movies);

        } catch(error){
            console.error('Error fetching trending movies: ${error}');

        }
    }



    useEffect(() => {
        fetchMovies(debouncedSearchTerm);
        loadTrendingMovies(debouncedSearchTerm);
    }, [debouncedSearchTerm]);

    useEffect(() => {
        loadTrendingMovies();
    }, []);


    console.log("Movie List State:", movieList);

    return (
        <main>
            <div className="pattern" />
            <div className="wrapper" />
            <header>
                <img src="./hero-img.png" alt="Hero" />
                <h1 className="text-5xl sm:text-[64px] sm:leading-[76px] font-extrabold tracking-tight text-center max-w-4xl mx-auto font-[Playfair_Display] text-white">
                    Find <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Movies</span> You'll enjoy without hassle
                </h1>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </header>

            {trendingMovies.length >0 && (
                <section className="Trending">
                    <h2>Trending Movies</h2>

                    <ul>
                        {trendingMovies.map((movie,index) => (
                            <li key ={movie.$id}>
                                <p>{index+1}</p>
                                <img src={movie.poster_url} alt={movie.title} />

                            </li>
                        ))}
                    </ul>
                    </section>
            
            )}

            <section className="all-movies">
                <h2>All Movies</h2>

                {isLoading ? (
                    <Spinner />
                ) : errorMessage ? (
                    <p className="text-red-500">{errorMessage}</p>
                ) : (
                    <ul>
                        {movieList.map((movie) => (
                            <MovieCard keys ={movie.id} movie={movie}/>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
};

export default App;
