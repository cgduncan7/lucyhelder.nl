import React from 'react'
import { shallow } from 'enzyme'

import RouteLocalizer from './index'
import { ExtendedRouteConfig } from '../lib/routes'

jest.mock('react-router-dom', () => ({ useLocation: () => ({ pathname: '/pieces' }) }))

describe('routeLocalizer', () => {

  const routes: ExtendedRouteConfig[] = [
    {
      component: () => <div>pieces</div>,
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
  ]

  it('should change route if resolved language does not match', () => {
    const changeLanguage = jest.fn()
    const wrapper = shallow(
      <RouteLocalizer
        routes={routes}
        changeLanguage={changeLanguage}
        language={'nl'}
      >
        <div>test</div>
      </RouteLocalizer>
    );
    expect(changeLanguage).toHaveBeenCalledTimes(1)
    expect(changeLanguage).toHaveBeenCalledWith('en')
    expect(wrapper).toBeDefined()
  })
})