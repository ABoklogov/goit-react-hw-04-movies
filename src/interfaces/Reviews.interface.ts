import ResultReviews from './ResultReviews.interface';

export default interface Reviews {
  id: number;
  page: number;
  results: ResultReviews[];
  total_pages: number;
  total_results: number;
}
