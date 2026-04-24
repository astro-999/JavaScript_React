import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/Home.css";
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const[error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
        }
         catch(error) {
            console.log('Error loading popular movies:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault()
        alert(`You searched for ${searchQuery}`)
        setSearchQuery("");
    };
    return (
        <div className="home">
            <h1>Welcome to Movie App</h1>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for a movie..."
                className="search-input" 
                value =  {searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" 
                    className="search-button">
                    Search
                </button>
            
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery)&& ( 
                    <MovieCard key={movie.id} movie={movie} />
                )))}
            </div>
        </div>
    );
}

export default Home;
