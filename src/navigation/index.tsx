import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { TFunction } from 'react-i18next';
import { matchRoutes } from 'react-router-config';

import { ExtendedRouteConfig } from '../lib/routes';

const lucyProfile = require('../../public/lucy.jpg').default;

export interface INavProps extends RouteComponentProps {
  routes: ExtendedRouteConfig[]
  t: TFunction
  lng: string
  changeLanguage: (lng: 'en' | 'nl') => void
}

class Navigation extends React.Component<INavProps, {}> {
  render() {
    const changeLanguage = (lang: 'nl' | 'en') => {
      this.props.changeLanguage(lang)
      const routes = matchRoutes(this.props.routes, this.props.location.pathname)
      if (routes.length === 1) {
        const route = routes[0]
        const newPathname = route.route.resolvePath && route.route.resolvePath(lang)
        if (newPathname && this.props.location.pathname !== newPathname) {
          this.props.history.replace(newPathname)
        }
      }
    }

    return (
      <nav>
        <img src={lucyProfile} />
        <ul>
          {
            this.props.routes.filter(({ navigable }) => navigable)
              .map(({ titleKey, resolvePath = () => undefined }, index) => {
                const resolvedPath = resolvePath(this.props.lng || 'nl')
                if (resolvedPath) {
                  return (
                    <li key={index}>
                      <Link to={resolvedPath} className={"font-lg font-wgt-700 font-gray"}>{ this.props.t(`routes:${titleKey}`) }</Link>
                    </li>
                  )
                }
                return undefined
              })
          }
        </ul>
        <div className={"nav-lang-selector"}>
          <span onClick={() => changeLanguage('nl')}>NL</span> / <span onClick={() => changeLanguage('en')}>EN</span>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation)