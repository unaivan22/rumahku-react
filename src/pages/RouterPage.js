import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HouseList from './Home/HouseList';
import HouseDetail from './Home/HouseDetail';

export default function RouterPage() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HouseList} />
          <Route path="/house/:id" component={HouseDetail} />
        </Switch>
      </div>
    </Router>
  )
}