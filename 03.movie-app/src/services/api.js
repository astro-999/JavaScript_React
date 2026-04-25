
const API_KEY = 'fb4177c1819b822187493300b51bb860'
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (query) => {  

        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();
        return data.results;
};

export const searchMovies = async (query) => {          
 
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
        const data = await response.json();
        return data.results;
        
     
};
