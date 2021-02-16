import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from '../LiveSearch/About';
import Contact from '../LiveSearch/Contact';
import Error from '../LiveSearch/Error';
import Navbar from '../LiveSearch/Navbar';
import Service from '../LiveSearch/Service';
import Search from './Search';
import User from './User';

const Main3 = () => {
  const Name = () => {
    return <h1>Hello,I am a App Page</h1>;
  };
  return (
    <>
      {/* <About />
      <Contact /> */}
      <Navbar />
      <Switch>
        {/* For React Component use 1 way */}
        {/* <Route exact path="/" component={About} /> */}

        <Route exact path="/" component={() => <About name="About" />} />

        {/* <Route exact path="/contact" component={Contact} /> */}

        {/* For React Render use 2 way*/}
        <Route
          exact
          path="/contact"
          render={() => <Contact name="Contact" />}
        />

        <Route exact path="/search" component={Search} />

        <Route exact path="/service" component={Service} />

        <Route path="/contact/name" component={Name} />

        {/* Here 1st mtdh  we used useParams (:name) for link adding with other   */}
        {/* <Route path="/user/:name" component={User} /> */}

        {/* Here 2nd mtdh we used useParams (:name) for link adding with other   */}
        <Route path="/user/:fname" component={User} />

        {/* Basic Error page with some h1 tag */}
        {/* <Route component={Error} /> */}

        {/* Custom Error page with some h1 tag and design*/}
        <Route component={Error} />

        {/* Redirect page while no path on link */}
        {/* <Redirect to="/" /> */}
      </Switch>
    </>
  );
};

export default Main3;
