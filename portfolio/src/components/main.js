import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './styles.css';

import Home from './home';
import ClassList from './classlist';

const Main = () => {
  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/classlist' component={ClassList}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default Main;