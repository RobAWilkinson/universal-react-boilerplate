import React from 'react';
class Title extends React.Component {
  render() {
    return(
        <h1 {...this.props}>
          {this.props.title}
        </h1>
        );
  }
}
export default Title;
