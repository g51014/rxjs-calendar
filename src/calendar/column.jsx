import React from "react";
import Day from './day.jsx';

export default class Col extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ['禮拜日','禮拜一','禮拜二','禮拜三','禮拜四','禮拜五','禮拜六']
    }
  }

  componentDidMount() {
    // this.props.service.month$.subscribe(
    //   month => this.setState({month:month})
    // );
   }

  render() {
    let days =[];
    for(var i=0; i < 7; i++) {
        days.push(
          <Day
          service = {this.props.service}
          date = {this.props.month == undefined ? ' ' : i == 0 ? this.state.text[this.props.index] : this.props.month[i-1]}
          name = {i}
          key = {i}
          />
        )
      }


    return (
      <div style = {{
        display: "inline-flex",
        flexDirection: "column",
        }} 
        className="column">
        {days}
      </div>
    );
  }
}
