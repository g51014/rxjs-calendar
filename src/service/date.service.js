import { Subject, BehaviorSubject, merge } from "rxjs";
import { startWith, map, mergeMap, tap, scan, filter, take } from "rxjs/operators";

export default class DateService {
    constructor() {
      // all date data
      this.date = new BehaviorSubject();
      this.date$ = this.date.asObservable().pipe(
        filter(data => !!data),
        map(data => {return data.default}));

       //calendar range
       this.calendarRange$ = this.date$.pipe(
        map(
          data => {
            let yearRange = this.getYearRange(this.getYears(data)), firstYearData = [], lastYearData = [], range = {first: {y: yearRange.first, m: 13}, last: {y: yearRange.last, m: 0}};
           
            data.forEach(e => {
              //first date
              if(e.date.split('/')[0] == yearRange.first) {
                firstYearData.push({m: parseInt(e.date.split('/')[1])})
                firstYearData.forEach(e => {range.first.m = range.first.m > e.m ? e.m : range.first.m;})
              }
              //last date
              if(e.date.split('/')[0] == yearRange.last) {
                lastYearData.push({m: parseInt(e.date.split('/')[1])})
                lastYearData.forEach(e => {range.last.m = range.last.m < e.m ? e.m : range.last.m;})
            }
            });
            return range;
          }
        )
      )

      //current y/m
      this.display = new BehaviorSubject();
      this.display$ = this.display.asObservable().pipe(
          scan(
              (previous,current) => {
                let m = previous.m + current > 12 ? 1 : previous.m + current < 1 ? 12 : previous.m + current;
                let y = previous.m + current > 12 ? previous.y + 1 : previous.m + current < 1 ? previous.y - 1 : previous.y;
                return ({y,m});
              }
          ),
      )
      
      // current month calendar
      this.month$ = this.display$.pipe(
          map(data => {
            //current month
            let firstDay = new Date(data.y,data.m-1,1).getDay();
            let monthDays = new Date(data.y,data.m,0).getDate();
            let Week = [[],[],[],[],[],[],[]];
              //col
              for(var i =0; i < 7; i++) {
                if(i < firstDay) 
                {
                  Week[i].push(0);
                  for(var j = 0; j < 5;j++) {
                    let first = firstDay == 0 && i == 0 ?  1 + i : 7 - firstDay + 1 + i;
                    let date = j*7+first > monthDays ? 0 : j*7+first;
                    Week[i].push(date);
                  }
                }
                else {
                  for(var j = 0; j < 6;j++) {
                    let first = i - firstDay +1 ;
                    let date = j*7+first > monthDays ? 0 : j*7+first;
                    Week[i].push(date);
                  }
                }
              }
              return Week;
          })
      )

      //method binding
      this.switchMonth = this.switchMonth.bind(this);
      this.getYears = this.getYears.bind(this);
      this.getYearRange = this.getYearRange.bind(this);
    }

    //---------------method---------------

    //change month
    switchMonth(distance) {
      this.calendarRange$.pipe(
        mergeMap(_ => this.display$,(range, current) => ({range, current}))).subscribe(
        data => {
          // this.displaySub
        }
      )
      this.display.next(distance)
    }

    //get all years
    getYears(data) {
      let y = [];
      for(var i=0; i< data.length; i++) {
          let date = data[i].date;
          y.includes(date.split('/')[0]) ? true : y.push(date.split('/')[0]);
        }
      return y;
    }
    //get first and last year
    getYearRange(date) {
      let year = [], first, last;
      date.forEach(e => {
        year.push(parseInt(e))
      })
      first = year[0];
      last = year[year.length-1]
      year.forEach(e => {
        first = e < first ? e : first;
        last = e > last ? e : last;
      })
      return({first,last});
    }

}