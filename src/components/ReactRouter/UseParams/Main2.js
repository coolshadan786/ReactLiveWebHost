import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../UseParams/About';
import Contact from '../UseParams/Contact';
import Error from '../UseParams/Error';
import Navbar from '../UseParams/Navbar';
import Service from '../UseParams/Service';
import User from './User';

const Main2 = () => {
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

        <Route exact path="/service" component={Service} />

        <Route path="/contact/name" component={Name} />

        {/* Here 1st mtdh  we used useParams (:name) for link adding with other   */}
        {/* <Route path="/user/:name" component={User} /> */}

        {/* Here 2nd mtdh we used useParams (:name) for link adding with other   */}
        <Route path="/user/:fname" component={User} />

        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Main2;
