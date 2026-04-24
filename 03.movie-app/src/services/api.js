
const API_KEY = 'fb4177c1819b822187493300b51bb860'
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (query) => {  
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
};

export const searchMovies = async (query) => {          

    try {  
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }       
};