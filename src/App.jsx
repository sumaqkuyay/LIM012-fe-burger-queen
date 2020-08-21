import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Welcome from './view/Welcome';
import ChiefChef from './view/ChiefChef';
import Waiter from './view/Waiter';
import './sass/index.scss';

const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/mozo">
          <Waiter />
        </Route>
        <Route path="/jefecocina" component={ChiefChef} />
        <Route component={() => (
          <div className="ed-grid">
            <h1>error 404</h1>
            <span> pagina no encontrada</span>
          </div>
        )}
        />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
