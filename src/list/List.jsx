import React from "react";
import Card from './card.jsx';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillUnmount() {
  //   console.log('list unmount');
  // }

  render() {
    return (
      <div style = {{display: 'flex'}} className="calendar">
        list
      </div>
    );
  }
}
