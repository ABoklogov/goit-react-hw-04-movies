import noImage from '../../img/noImage.jpeg';
import s from './MovieDetails.module.css';
import PropTypes from 'prop-types';

const MovieDetails = ({ movie }) => {
  return (
    <div className={s.boxDetailsMovie}>
      <img
        className={s.detailsMovieImage}
        src={
          movie.poster_path !== null
            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
            : noImage
        }
        alt={movie.title}
        width={200}
      />
      <div className={s.boxInfo}>
        <h1>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h1>
        <p>
          <span>Popularity:</span> {movie.popularity}
        </p>
        <p>
          <span>Overview:</span> {movie.overview}
        </p>
        <p>
          <span>Genres:</span> {movie.genres.map(el => `${el.name} `)}
        </p>
      </div>
    </div>
  );
};

MovieDetails.protoType = {
  movie: PropTypes.arrayOf(PropTypes.object),
};
export default MovieDetails;
