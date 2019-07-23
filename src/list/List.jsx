import React from "react";
import Card from './card.jsx';
import ControlBar from './controlBar.jsx';
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      days: ['禮拜日','禮拜一','禮拜二','禮拜三','禮拜四','禮拜五','禮拜六']
    }
  }

  componentDidMount() {
    this.props.service.sortMonthData$.subscribe(
      monthData => {
        console.log(monthData)
        this.setState({data: monthData.sortMonthData, page: monthData.page})
      }
    )
  }


  render() {
    let cards = [];
    let controlBar = this.state.page > 1 ? <ControlBar/> : '';
    for(var i =0; i< this.state.data.length; i++) {
      let day = new Date(parseInt(this.state.data[i].date.split('/')[0]),parseInt(this.state.data[i].date.split('/')[1]-1),parseInt(this.state.data[i].date.split('/')[2]))
      // console.log(day);
      cards.push(
        <Card
          key = {i}
          data = {this.state.data[i]}
          date = {day.getDate()}
          day = {this.state.days[day.getDay()]}
        />
      )
    }
    
    return (
      <div className="list">
        {cards}
        {controlBar}
      </div>
    );
  }
}
