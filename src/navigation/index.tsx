import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import {
  Link,
} from 'react-router-dom';

const lucyProfile = require('../../public/lucy.jpg').default;

export interface INavProps {
  routes: RouteConfig[]
}

export default class Navigation extends React.Component<INavProps, {}> {
  constructor(props: INavProps) {
    super(props);
  }

  resolvePath(path?: string | string[]) {
    switch (typeof path) {
      case 'string': return path
      case 'object': return path[0]
      default: return undefined
    }
  }

  render() {
    return (
      <nav>
        <img src={lucyProfile} />
        <ul>
          {
            this.props.routes.map(({ path, title }, index) => {
              const resolvedPath = this.resolvePath(path)
              if (resolvedPath) {
                return (
                  <li key={index}>
                    <Link to={resolvedPath} className={"font-lg font-wgt-700 font-gray"}>{ title.toUpperCase() }</Link>
                  </li>
                )
              }
              return undefined
            })
          }
        </ul>
        <div className={"nav-lang-selector"}>
          NL / EN
        </div>
      </nav>
    );
  }
}