import * as React from 'react';
import {
  Route,
  Switch,
  RouteProps,
} from 'react-router-dom';
import { UseTranslationOptions, useTranslation } from 'react-i18next';

type SupportedLocale = 'nl' | 'en'

export interface ILocalizedRoute extends RouteProps {
  path: string
}

export interface ILocalizedRouterProps extends UseTranslationOptions {
  routes: ILocalizedRoute[]
  locale: SupportedLocale,
  basePath: string,
}

export default function LocalizedRouter(props: ILocalizedRouterProps) {
  const { routes, locale, basePath } = props;

  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(locale)
  }, [locale])

  return (
    <Route path={basePath}>
      <Switch>
        {
          routes.map(({ exact, path, component }, index) => {
            const tPath = `${basePath}/${t(path)}`;
            return (
              <Route 
                key={`${locale}-${index}`}
                exact={exact}
                path={tPath}
                component={component}
              />
            );
          })
        }
      </Switch>
    </Route>
  )
}