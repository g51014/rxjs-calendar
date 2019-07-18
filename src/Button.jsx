import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div style = {{display:'flex'}} className="">
        <button onClick = {this.props.callback}>切換{this.props.mode}顯示</button>
      </div>
    );
  }
}
