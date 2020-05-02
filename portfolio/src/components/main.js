import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './styles.css';

import Home from './home';
import ClassList from './classlist';
import PCIReadMore from './pci_read_more';
import INSTReadMore from './inst377_read_more';
import PortfolioReadMore from './portfolio_read_more';

const Main = () => {
  return (
    <Route render={({location}) => (
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/classlist' component={ClassList}></Route>
            <Route exact path='/pci_read_more' component={PCIReadMore}></Route>
            <Route exact path='/inst_read_more' component={INSTReadMore}></Route>
            <Route exact path='/portfolio_read_more' component={PortfolioReadMore}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  );
}

export default Main;