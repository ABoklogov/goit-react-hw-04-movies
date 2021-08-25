const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day?api_key=';
const API_KEY = '4331b0f002dbaa82c39c8ee913b50fb0';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export const fatchPopularMovies = () => {
  return fetchWithErrorHandling(`${BASE_URL}${API_KEY}`);
};
