import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './Home/Login';
import HouseList from './Home/HouseList';
import HouseDetail from './Home/HouseDetail';
import Search from './utils/Search';
import Saved from './Home/Saved';
import Profile from './Home/Profile';

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={HouseList} />
          <Route path="/house/:id" component={HouseDetail} />
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  )
}