import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import {
  Link,
} from 'react-router-dom';

export interface INavProps {
  routes: RouteConfig[]
}

export default class Navigation extends React.Component<INavProps, {}> {
  constructor(props: INavProps) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <nav>
        <ul>
          {
            this.props.routes.map(({ path, title }, index) => {
              if (path) {
                return (
                  <li key={index}>
                    <Link to={path[0]}>{ title }</Link>
                  </li>
                )
              }
              return undefined
            })
          }
        </ul>
      </nav>
    );
  }
}