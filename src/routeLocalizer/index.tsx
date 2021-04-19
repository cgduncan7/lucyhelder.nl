import { matchRoutes } from 'react-router-config';
import { useLocation } from 'react-router-dom';
import { ExtendedRouteConfig } from '../lib/routes';

export default function RouteLocalizer(props: any) {
  const location = useLocation()
  const extendedRoute: ExtendedRouteConfig = (matchRoutes(props.routes, location.pathname)[0].route as unknown) as ExtendedRouteConfig
  console.log(extendedRoute)
  if (extendedRoute && extendedRoute.resolveLanguage) {
    const desiredLanguage = extendedRoute.resolveLanguage(location.pathname)
    if (props.language !== desiredLanguage) props.changeLanguage(desiredLanguage)
  }
  return props.children
}