import React from "react";

export default class Day extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {}
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <div className="day">
        {this.props.date}
      </div>
    );
  }
}
