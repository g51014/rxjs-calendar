import React from "react";

export default class ControlBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  switchPage(distance) {this.props.service.page.next(this.props.page + distance)}

  render() {
    return (
      <div className="control-bar">
          <div style = {{flex:1,textAlign:'left'}} onClick = {this.switchPage.bind(this,-1)}>上一頁</div>
          <div style = {{flex:1}}>{this.props.page}/{this.props.totalPage}</div>
          <div style = {{flex:1,textAlign:'right'}} onClick = {this.switchPage.bind(this,1)}>下一頁</div>
      </div>
    );
  }
}
