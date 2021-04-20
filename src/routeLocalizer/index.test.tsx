import React from 'react'
import { shallow } from 'enzyme'

import RouteLocalizer from './index'
import { ExtendedRouteConfig } from '../lib/routes'

jest.mock('react-router-dom', () => ({ useLocation: () => ({ pathname: '/pieces' }) }))

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

describe('routeLocalizer', () => {
  it('should render children', () => {
    const changeLanguage = () => {}
    const wrapper = shallow(
      <RouteLocalizer
        routes={routes}
        changeLanguage={changeLanguage}
        language={'en'}
      >
        <div id="child">test</div>
      </RouteLocalizer>
    );
    expect(wrapper).toBeDefined()
    expect(wrapper.find('#child')).toBeDefined()
  })

  it('should change language if resolved language does not match', () => {
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

  it('should not change language if resolved language does not match', () => {
    const changeLanguage = jest.fn()
    const wrapper = shallow(
      <RouteLocalizer
        routes={routes}
        changeLanguage={changeLanguage}
        language={'en'}
      >
        <div>test</div>
      </RouteLocalizer>
    );
    expect(changeLanguage).toHaveBeenCalledTimes(0)
    expect(wrapper).toBeDefined()
  })
})