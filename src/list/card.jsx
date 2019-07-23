import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className = 'card-date'>
          <div>
            {this.props.date}
          </div>
          <div>
           {this.props.day}
          </div>
        </div>
        <div className = 'card-available'>
          <div>可賣: {this.props.data.availableVancancy}</div>
          <div>{this.props.data.guaranteed ? '成團':''}</div>
        </div>
        <div className = 'card-total'>
          <div>團位: {this.props.data.totalVacnacy}</div>
        </div>
        <div className = 'card-price'>
          <div>{this.props.data.status}</div>
          <div>{this.props.data.price}</div>
        </div>
      </div>
    );
  }
}
