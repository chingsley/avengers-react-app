import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div>
      <h1>Avengers Database</h1>
      <h4>Danger! This is classified infromation!</h4>
      <Link to="/avengers">Enter</Link>
    </div>
  );
}

export default Home;
