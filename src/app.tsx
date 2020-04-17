import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import LocalizedRouter, { ILocalizedRoute } from './localizedRouter';
import Page from './page';

interface IAppProps {}

interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  readonly routes: ILocalizedRoute[] = [
    { path: '/', component: () => <Page title="home"></Page> }
  ]
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <LocalizedRouter routes={this.routes} basePath={'en'} locale={'en'} />
          <LocalizedRouter routes={this.routes} basePath={''} locale={'nl'} />
        </Switch>
      </Router>
    )
  }
}