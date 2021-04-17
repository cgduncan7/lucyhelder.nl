import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import Navigation from './navigation';
import Home from './home';
import Pieces from './pieces';
import FourOhFour from './fourohfour';

import { ExtendedRouteConfig } from './lib/routes'

const routes: ExtendedRouteConfig[] = [
  {
    component: Home,
    exact: true,
    path: '/',
    resolvePath: () => '/',
    titleKey: 'home',
    navigable: true,
  },
  {
    component: Pieces,
    path: ['/stukjes', '/pieces'],
    resolveLanguage: (path: string) => path === '/pieces' ? 'en' : 'nl',
    resolvePath: (lang: string) => {
      switch (lang.toLowerCase()) {
        case 'en': return '/pieces'
        case 'nl':
        default: return '/stukjes'
      }
    },
    titleKey: 'pieces',
    navigable: true,
  },
  {
    component: () => <div>Lessen</div>,
    path: ['/les-nederlands', '/dutch-lessons'],
    resolveLanguage: (path: string) => path === '/dutch-lessons' ? 'en' : 'nl',
    resolvePath: (lang: string) => {
      switch (lang.toLowerCase()) {
        case 'en': return '/dutch-lessons'
        case 'nl':
        default: return '/les-nederlands'
      }
    },
    titleKey: 'lessons',
    navigable: true,
  },
  {
    component: () => <div>Debaatclub</div>,
    path: ['/debaatclub', '/debate-club'],
    resolveLanguage: (path: string) => path === '/debate-club' ? 'en' : 'nl',
    resolvePath: (lang: string) => {
      switch (lang.toLowerCase()) {
        case 'en': return '/debate-club'
        case 'nl':
        default: return '/debaatclub'
      }
    },
    titleKey: 'debate_club',
    navigable: true,
  },
  {
    component: () => <div>Taal cafe</div>,
    path: ['/taal-cafe', '/language-cafe'],
    resolveLanguage: (path: string) => path === '/language-cafe' ? 'en' : 'nl',
    resolvePath: (lang: string) => {
      switch (lang.toLowerCase()) {
        case 'en': return '/language-cafe'
        case 'nl':
        default: return '/taal-cafe'
      }
    },
    titleKey: 'language_cafe',
    navigable: true,
  },
  {
    component: () => <FourOhFour />,
    path: '*',
    titleKey: '404',
    navigable: false,
  }
]

export default class App extends React.Component {
  private readonly routes: ExtendedRouteConfig[]
  constructor(props: any) {
    super(props);
    this.routes = routes
  }

  render() {
    return (
      <Router>
        <Navigation routes={this.routes} />
        <div className='content'>
          { renderRoutes(this.routes) }
        </div>
      </Router>
    )
  }
}