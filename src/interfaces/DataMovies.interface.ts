import Movie from './Movie.interface';

export default interface DataMavies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};