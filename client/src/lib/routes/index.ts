import { RouteConfig } from 'react-router-config';

export interface ExtendedRouteConfig extends RouteConfig {
  titleKey: string
  navigable: boolean
  resolveLanguage?: (path: string) => string
  resolvePath?: (lang: string) => string
}