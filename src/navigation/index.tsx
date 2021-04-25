import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { TFunction } from 'react-i18next'
import { matchRoutes } from 'react-router-config'
import { useMediaQuery } from 'react-responsive'

import { ExtendedRouteConfig } from '../lib/routes'

const lucyName = require('../../public/lucy.svg').default

export interface INavProps extends RouteComponentProps {
  routes: ExtendedRouteConfig[]
  t: TFunction
  lng: string
  changeLanguage: (lng: 'en' | 'nl') => void
}

function Navigation (props: INavProps) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'})
  const changeLanguage = (lang: 'nl' | 'en') => {
    props.changeLanguage(lang)
    const routes = matchRoutes(props.routes, props.location.pathname)
    if (routes.length === 1) {
      const route = routes[0]
      const newPathname = route.route.resolvePath && route.route.resolvePath(lang)
      if (newPathname && props.location.pathname !== newPathname) {
        props.history.replace(newPathname)
      }
    }
  }

  return (
    <nav>
      <Link className={'nav-title'}  to={'/'}>
        <img src={lucyName} />
      </Link>
      {
        !isMobile &&
        <ul>
          {
            props.routes.filter(({ navigable }) => navigable)
              .map(({ titleKey, resolvePath = () => undefined }, index) => {
                const resolvedPath = resolvePath(props.lng || 'nl')
                if (resolvedPath) {
                  return (
                    <li key={index}>
                      <Link to={resolvedPath}>{ props.t(`routes:${titleKey}`) }</Link>
                    </li>
                  )
                }
                return undefined
              })
          }
        </ul>
      }
      { isMobile && <span>Menu</span> }
      <div className={'nav-lang-selector'}>
        <span onClick={() => changeLanguage('nl')}>NL</span> / <span onClick={() => changeLanguage('en')}>EN</span>
      </div>
    </nav>
  )
}

export default withRouter(Navigation)