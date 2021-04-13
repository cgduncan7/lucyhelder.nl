import * as React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';

import Navigation from './navigation';
import Home from './home';

export default class App extends React.Component<{}, {}> {
  private readonly routes: RouteConfig[]
  constructor(props: any) {
    super(props);
    this.routes = [
      {
        component: () => <Home />,
        exact: true,
        path: "/",
        title: "Home",
      },
      {
        component: () => <div>Stukjes</div>,
        path: "/stukjes",
        title: "Stukjes",
      },
      {
        component: () => <div>Lessen</div>,
        path: "/les-nederlands",
        title: "Lessen",
      },
      {
        component: () => <div>Debaatclub</div>,
        path: "/debaatclub",
        title: "Debaatclub",
      },
      {
        component: () => <div>Taal cafe</div>,
        path: "/taal-cafe",
        title: "Taal cafe",
      }
    ]
  }

  render() {
    return (
      <Router>
        <Navigation routes={this.routes} />
        <div className="content">
          { renderRoutes(this.routes) }
        </div>
      </Router>
    )
  }
}