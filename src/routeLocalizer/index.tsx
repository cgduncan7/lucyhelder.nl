import React from 'react'
import { matchRoutes } from 'react-router-config'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ExtendedRouteConfig } from '../lib/routes'

export interface RouteLocalizerProps {
  routes: ExtendedRouteConfig[]
  children: JSX.Element | JSX.Element[]
}

export default function RouteLocalizer(props: RouteLocalizerProps): JSX.Element {
  const location = useLocation()
  const { i18n } = useTranslation()
  const extendedRoute: ExtendedRouteConfig = (matchRoutes(props.routes, location.pathname)[0].route as unknown) as ExtendedRouteConfig
  if (extendedRoute && extendedRoute.resolveLanguage) {
    const desiredLanguage = extendedRoute.resolveLanguage(location.pathname)
    if (i18n.language !== desiredLanguage) i18n.changeLanguage(desiredLanguage)
  }
  return <>{ props.children }</>
}