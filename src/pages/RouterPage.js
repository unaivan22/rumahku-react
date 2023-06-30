import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HouseList from './Home/HouseList';
import HouseDetail from './Home/HouseDetail';
import Search from './utils/Search';

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HouseList} />
          <Route path="/house/:id" component={HouseDetail} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </Router>
  )
}