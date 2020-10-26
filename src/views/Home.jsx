import React from 'react';

function Home(logIn) {
  return (
    (!logIn)
      ? (
        <div>
          <h1>Please Log In</h1>
        </div>
      )
      : (
        <div>
          <h1>Home</h1>
        </div>
      )
  );
}

export default Home;
