import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation, { INavLink } from './navigation';
import Page from './page';

interface IRoute extends INavLink {
  component: any,
  exact?: boolean,
}

class App extends React.Component<{}, {}> {
  private routes: IRoute[] = []

  constructor(props: any) {
    super(props);

    this.routes = [
      { path: '/', label: 'Hoofdpagina', component: <Page title="Hoofdpagina">Deze is de hoofdpagina</Page>, exact: true },
      { path: '/taal-cafe', label: 'Taalcafé', component: <Page title="Taalcafé">Deze gaat over de taalcafé</Page> },
      { path: '/korte-verhalen', label: 'Korte Verhalen', component: <Page title="Korte verhalen">Hier staan korte verhalen</Page> },
      { path: '/debatclub', label: 'Debatclub', component: <Page title="Debatclub">D E B A T C L U B</Page> },
    ]
  }

  render() {
    return (
      <Router>
        <Navigation links={this.routes}/>
        <Switch>
          {
            this.routes.map(({ path, component, exact = false }, index) => (
                <Route exact={exact} path={path} key={index}>
                  { component }
                </Route>
            ))
          }
          <Route path='*' key='404'>
            404 - Page not found.
          </Route>
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
