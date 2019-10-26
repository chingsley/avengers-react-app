import React from 'react';

const AvengerMovies = props => {
  return (
    <div>
      {props.movies.map(movie => <p key={movie}>{movie}</p>)}
    </div>
  );
};

export default AvengerMovies;
