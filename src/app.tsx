import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navigation, { INavLink } from './navigation';

export default class App extends React.Component<{}, {}> {
  private readonly links: INavLink[]
  constructor(props: any) {
    super(props);
    this.links = [
      {
        label: 'Hoofdpagina',
        path: '/',
      },
      {
        label: 'Info',
        path: '/info'
      },
      {
        label: 'Taal Cafe',
        path: '/taal-cafe'
      },
      {
        label: 'Stukjes',
        path: '/stukjes'
      },
      {
        label: 'Debatclub',
        path: '/debatclub'
      },
    ]
  }

  render() {
    return (
      <Router>
        <Navigation links={this.links}>
        </Navigation>
        <Switch>
          <Route path="/en">
            We gaan eerst Nederlands doen, balen.
          </Route>
          <Route path="/">
            <Switch>
              <Route exact path="/">
                Hoofdpagina
              </Route>
              <Route path="/info">
                Info
              </Route>
              <Route path="/taal-cafe">
                Taal cafe
              </Route>
              <Route path="/stukjes">
                Stukjes
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