import React from 'react';
import Title from '../title/index.js';

export default class extends React.Component {
  render() {
    console.log(this.props);
    return (
        <div>
          <Title 
            title={ this.props.title }
           />
           <ul>
           {this.props.names.map(name =>
               <li>{name}</li>
           )}
           </ul>
        </div>
        );
  }
};
