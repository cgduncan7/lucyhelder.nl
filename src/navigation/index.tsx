import * as React from 'react';
import {
  Link,
} from 'react-router-dom';

export interface INavLink {
  path: string
  label: string
}

export interface INavProps {
  links: INavLink[]
}

export default class Navigation extends React.Component<INavProps, {}> {
  constructor(props: INavProps) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          {
            this.props.links.map(({ path, label }, index) => (
              <li key={index}>
                <Link to={path}>{ label }</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
}