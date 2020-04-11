import * as React from 'react';

export interface IPageProps {
  title: string
}

export default class Page extends React.Component<IPageProps, {}> {
  constructor(props: IPageProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }
}
