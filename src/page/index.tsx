import * as React from 'react';
import { Translation } from 'react-i18next';

export interface IPageProps {
  title: string
}

export default class Page extends React.Component<IPageProps, {}> {
  constructor(props: IPageProps) {
    super(props);
  }

  render() {
    return (
      <Translation>
        {
          (t, _, ready) => {
            if (ready) {
              return (
                <div>
                  <h1>{ t('404') }</h1>
                  <div className="content">
                    { this.props.children }
                  </div>
                </div>
              );
            } else {
              return  (
                <div>
                  not ready big boi
                </div>
              );
            }
          }
        }
      </Translation>
    )
  }
}