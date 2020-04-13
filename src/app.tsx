import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/en">
            We gaan eerst Nederlands doen, balen.
          </Route>
          <Route path="/">
            <Switch>
              <Route exact path="/">
                Hoofdpagina
              </Route>
              <Route path="/debatclub">
                Debatclub
              </Route>
              <Route path="*">
                Pagina niet gevonden
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    )
  }
}