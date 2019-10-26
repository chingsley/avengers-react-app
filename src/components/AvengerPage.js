import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import AvengerDetails from './AvengerDetails';
import AvengerMovies from './AvengerMovies';

const CharacterImg = styled.div`
  display: inline-block;
  width: 900px;
  height: 275px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)
  ), url(${props => props.avenger.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 2rem;
`;


function AvengerPage(props) {
  // const id = props.match.params.id;
  console.log(props)
  const {match: { params: { id } }} = props;
  const avenger = props.avengers.find(avenger => `${avenger.id}` === id);
  return (
    <div>
      <CharacterImg avenger={avenger}>
        <h1>{avenger.name}</h1>
        <h4>{avenger.nickname}</h4>
      </CharacterImg>
      <div>
        <Link to={`/avengers/${id}/details`} className="link-btn">Details</Link>
        <Link to={`/avengers/${id}/movies`} className="link-btn">Movies</Link>
      </div>
      <Route exact path="/avengers/:id/details" render={props => <AvengerDetails {...props} details={avenger.description} />} />
      <Route exact path="/avengers/:id/movies" render={props => <AvengerMovies {...props} movies={avenger.movies} /> } />
    </div>
  );
}

export default AvengerPage;
