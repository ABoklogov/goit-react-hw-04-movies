const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => (
        <li key={el.cast_id}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${el.profile_path}`}
            alt={el.original_name}
            width={100}
          />
          <p>{el.original_name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastList;
