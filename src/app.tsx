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
            <Switch>
              <Route exact path="/en">
                Home page
              </Route>
              <Route path="/en/debate-club">
                Debate club
              </Route>
              <Route path="*">
                Page not found
              </Route>
            </Switch>
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