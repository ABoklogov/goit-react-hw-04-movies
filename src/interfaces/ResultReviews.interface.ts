import AuthorDatails from './AuthorDatails.interface';

export default interface ResultReviews {
  author: string;
  author_details: AuthorDatails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
