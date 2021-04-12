import * as React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { renderRoutes, RouteConfig } from 'react-router-config';

import Navigation from './navigation';

export default class App extends React.Component<{}, {}> {
  private readonly routes: RouteConfig[]
  constructor(props: any) {
    super(props);
    this.routes = [
      {
        component: () => <div>Home</div>,
        exact: true,
        path: "/",
        title: "Home",
      },
      {
        component: () => <div>Stories</div>,
        exact: true,
        path: "/stories",
        title: "stories",
      }
    ]
  }

  render() {
    return (
      <Router>
        <Navigation routes={this.routes}>
        </Navigation>
        { renderRoutes(this.routes) }
      </Router>
    )
  }
}