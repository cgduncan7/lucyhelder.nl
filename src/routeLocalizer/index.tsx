import React from 'react'
import { matchRoutes } from 'react-router-config'
import { useLocation } from 'react-router-dom'

import { ExtendedRouteConfig } from '../lib/routes'

export interface RouteLocalizerProps {
  routes: ExtendedRouteConfig[]
  changeLanguage: (lng: string) => void
  language: string
  children: JSX.Element | JSX.Element[]
}

export default function RouteLocalizer(props: RouteLocalizerProps): JSX.Element {
  const location = useLocation()
  const extendedRoute: ExtendedRouteConfig = (matchRoutes(props.routes, location.pathname)[0].route as unknown) as ExtendedRouteConfig
  if (extendedRoute && extendedRoute.resolveLanguage) {
    const desiredLanguage = extendedRoute.resolveLanguage(location.pathname)
    if (props.language !== desiredLanguage) props.changeLanguage(desiredLanguage)
  }
  return <>{ props.children }</>
}