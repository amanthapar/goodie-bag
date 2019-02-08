import React from 'react';
import { Route, Link } from 'react-router-dom';
import AllCandies from './AllCandies';
import { SingleCandy } from './SingleCandy';

const Root = () => {
  return (
    <div>
      <nav>
        <Link to="/candies">
          <a>Goodie Bag</a>
        </Link>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Route exact path="/candies" component={AllCandies} />
        <Route path="/candies/:candyId" component={SingleCandy} />
      </main>
    </div>
  );
};

export default Root;
