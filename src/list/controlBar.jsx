import React from "react";

export default class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  componentDidMount() {
    this.props.service.sortMonthData$.subscribe(
      _ => {
        // reset page
        this.setState({page: 1})
      }
    );
    this.props.service.page$.subscribe(
      page => {
        this.setState({page: page})
        console.log(page)
      }
    )
  }

  switchPage(distance) {this.props.service.page.next(this.state.page + distance)}

  render() {
    return (
      <div className="control-bar">
          <div style = {{flex:1,textAlign:'left'}} onClick = {this.switchPage.bind(this,-1)}>上一頁</div>
          <div style = {{flex:1}}>{this.state.page}/{this.props.totalPage}</div>
          <div style = {{flex:1,textAlign:'right'}} onClick = {this.switchPage.bind(this,1)}>下一頁</div>
      </div>
    );
  }
}
