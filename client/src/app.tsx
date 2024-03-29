import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { withTranslation, WithTranslation } from 'react-i18next'

import Navigation from './navigation'
import Home from './home'
import Pieces from './pieces'
import About from './about'
import BookClub from './bookClub'
import FourOhFour from './fourohfour'
import RouteLocalizer from './routeLocalizer'

import { ExtendedRouteConfig } from './lib/routes'

const routes: ExtendedRouteConfig[] = [
  {
    component: Home,
    exact: true,
    path: '/',
    resolvePath: () => '/',
    titleKey: 'home',
    navigable: false,
  },
  {
    component: About,
    path: ['/over-mij', '/about-me'],
    resolvePath: (lang: string) => lang === 'en' ? '/about-me' : '/over-mij',
    resolveLanguage: (path: string) => path === '/about-me' ? 'en' : 'nl',
    titleKey: 'about',
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
    navigable: false,
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
    navigable: false,
  },
  {
    component: () => <div>Debatclub</div>,
    path: ['/debatclub', '/debate-club'],
    resolveLanguage: (path: string) => path === '/debate-club' ? 'en' : 'nl',
    resolvePath: (lang: string) => {
      switch (lang.toLowerCase()) {
        case 'en': return '/debate-club'
        case 'nl':
        default: return '/debatclub'
      }
    },
    titleKey: 'debate_club',
    navigable: false,
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
    navigable: false,
  },
  {
    component: BookClub,
    path: ['/boekenclub', '/book-club'],
    resolveLanguage: (path: string) => path === '/book-club' ? 'en' : 'nl',
    resolvePath: (lang: string) => {
      switch (lang.toLowerCase()) {
        case 'en': return '/book-club'
        case 'nl':
        default: return '/boekenclub'
      }
    },
    titleKey: 'book_club',
    navigable: true,
  },
  {
    component: () => <FourOhFour />,
    path: '*',
    titleKey: '404',
    navigable: false,
  }
]

class App extends React.Component<WithTranslation, {}> {
  private readonly routes: ExtendedRouteConfig[]
  constructor(props: any) {
    super(props)
    this.routes = routes
    this.changeLanguage = this.changeLanguage.bind(this)
  }

  changeLanguage(lang: string) {
    this.props.i18n.changeLanguage(lang)
  }

  render() {
    const { t } = this.props
    return (
      <Router>
        <RouteLocalizer routes={this.routes}>
          <Navigation routes={this.routes} />
          <div className='content'>
            { renderRoutes(this.routes, { t }) }
          </div>
        </RouteLocalizer>
      </Router>
    )
  }
}

export default withTranslation()(App)