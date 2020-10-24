import React, { useState } from 'react';

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    (!loggedIn) ? <h1>Please Log In</h1>
      : (
        <div>
          <h1>Home</h1>
        </div>
      )
  );
}

export default Home;
