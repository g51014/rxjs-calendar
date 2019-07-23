import React from "react";
export default class MonthSelecter extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="tab-month">
        <a onClick = {this.props.service.switchMonth.bind(this,-1)} className="left-arrow" />
        <ul  className="month-list">
          <li>{this.props.currentYM.m-1 < 1 ? this.props.currentYM.y-1 : this.props.currentYM.y} {this.props.currentYM.m-1 < 1 ? 12 : this.props.currentYM.m-1}月</li>
          <li>{this.props.currentYM.y} {this.props.currentYM.m}月</li>
          <li>{this.props.currentYM.m+1 > 12 ? this.props.currentYM.y+1 : this.props.currentYM.y} {this.props.currentYM.m+1 > 12 ? 1 : this.props.currentYM.m+1}月</li>
        </ul>
        <a onClick = {this.props.service.switchMonth.bind(this,1)} className="right-arrow" />
      </div>
    );
  }
}
