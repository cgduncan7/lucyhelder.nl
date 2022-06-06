import React, { useState } from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
import { matchRoutes } from 'react-router-config'
import { useMediaQuery } from 'react-responsive'

import { ExtendedRouteConfig } from '../lib/routes'

const lucyName = require('../../public/lucy.svg').default

export interface INavProps extends RouteComponentProps, WithTranslation {
  routes: ExtendedRouteConfig[]
}

function Navigation (props: INavProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'})
  const changeLanguage = (lang: 'nl' | 'en') => {
    props.i18n.changeLanguage(lang)
    const routes = matchRoutes(props.routes, props.location.pathname)
    if (routes.length === 1) {
      const route = routes[0]
      const newPathname = route.route.resolvePath && route.route.resolvePath(lang)
      if (newPathname && props.location.pathname !== newPathname) {
        props.history.replace(newPathname)
      }
    }
  }

  let listClassName = 'route-list'
  if (isMobile) {
    listClassName = menuOpen ? 'route-list mobile open' : 'route-list mobile closed'
  }

  const routeList = (
    <ul className={listClassName}>
      {
        props.routes.filter(({ navigable }) => navigable)
          .map(({ titleKey, resolvePath = () => undefined }, index) => {
            const resolvedPath = resolvePath(props.i18n.language || 'nl')
            const underline = props.location.pathname === resolvedPath;
            if (resolvedPath) {
              return (
                <li key={index} className={underline ? 'current' : ''}>
                  <Link to={resolvedPath}>{ props.t(`routes:${titleKey}`) }</Link>
                </li>
              )
            }
            return undefined
          })
      }
    </ul>
  );

  return (
    <nav>
      <Link className={'nav-title'}  to={'/'}>
        <img src={lucyName} />
      </Link>
      <div className={'route-list-container'}>
        { isMobile && <span onClick={() => setMenuOpen(!menuOpen)}>Menu</span> }
        { routeList }
      </div>
      <div className={'nav-lang-selector'}>
        <span onClick={() => changeLanguage('nl')}>NL</span> / <span onClick={() => changeLanguage('en')}>EN</span>
      </div>
    </nav>
  )
}

export default withTranslation()(withRouter(Navigation))