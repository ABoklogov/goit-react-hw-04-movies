const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4331b0f002dbaa82c39c8ee913b50fb0';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export const fatchPopularMovies = () => {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
  );
};

export const fatchOnRquestMovies = query => {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`,
  );
};

export const fatchDetailsMovie = id => {
  return fetchWithErrorHandling(`
${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`);
};

export const fatchMovieActors = id => {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  );
};
