
import { useState, useEffect, createContext ,useContext} from "react"
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites,setFavourites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
            setFavourites(JSON.parse(storedFavorites));
        }

    },[])
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavourites((prevFavorites) => [...prevFavorites, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavourites((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
    }
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    };

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )

}





