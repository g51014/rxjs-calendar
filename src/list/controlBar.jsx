import React from "react";

export default class ControlBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="control-bar">
          <div style = {{flex:1,textAlign:'left'}}>上一頁</div>
          <div style = {{flex:1}}>1/2</div>
          <div style = {{flex:1,textAlign:'right'}}>下一頁</div>
      </div>
    );
  }
}
