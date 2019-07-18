import React from "react";
export default class MonthSelecter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="tab-month">
        <a onClick = {this.props.service.switchMonth.bind(this,-1)} className="left-arrow" />
        <ul className="month-list">
          <li />
          <li />
          <li />
        </ul>
        <a onClick = {this.props.service.switchMonth.bind(this,1)} className="right-arrow" />
      </div>
    );
  }
}
