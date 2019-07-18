import React from "react";
import Col from './column.jsx';

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {}

  render() {
    
    let month = [];
    for(var i=0; i < 7; i++) {
      month.push(
        <Col
          month = {this.props.month == undefined ? undefined : this.props.month[i]}
          service = {this.props.service}
          key = {i}
          index = {i}
        />
      )
    }
    return (
      <div style = {{display: 'flex',justifyContent: 'space-around'}} className="calendar">
        {month}
      </div>
    );
  }
}
