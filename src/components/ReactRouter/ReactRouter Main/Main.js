import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../ReactRouter Main/About';
import Contact from '../ReactRouter Main/Contact';
import Error from '../ReactRouter Main/Error';
import Navbar from '../ReactRouter Main/Navbar';
import Service from '../ReactRouter Main/Service';

const Main = () => {
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

        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Main;
