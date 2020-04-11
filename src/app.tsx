import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Navigation, { INavLink } from './navigation';

interface IRoute extends INavLink {
  component: any
}

class App extends React.Component<{}, {}> {
  private routes: IRoute[] = []

  constructor(props: any) {
    super(props);

    this.routes = [
      { path: '/taal-cafe', label: 'Taalcafé', component: <div>Taalcafé</div> },
      { path: '/korte-verhalen', label: 'Korte Verhalen', component: <div>Korte verhalen</div> },
      { path: '/debatclub', label: 'Debatclub', component: <div>Debatclub</div> },
      { path: '/', label: 'Hoofdpagina', component: <div>Hoofdpagina</div> },
    ]
  }

  render() {
    return (
      <Router>
        <Navigation links={this.routes}/>
        <Switch>
          {
            this.routes.map(({ path, component }, index) => (
                <Route path={path} key={index}>
                  { component }
                </Route>
            ))
          }
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
