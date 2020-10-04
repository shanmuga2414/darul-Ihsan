import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import ExtendedTable from './routes/ExtendedTable';
import Forms from './routes/Forms';
import PreAdmission from './routes/Forms/PreAdmission';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/tables" exact />
        <Route component={ExtendedTable} path="/tables/" />
        <Route component={Forms} path="/forms" />
        <Route component={PreAdmission} path="/pre-admission"/>
      </Switch>
    </Router>

  );
}

export default App;
