import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import ic_cancel from '../../asset/image/ic_cancel.svg';
import './Home.scss';

import alert from '../../asset/db/alert.json'
import list from '../../asset/db/list.json'
import dust from '../../asset/db/dust.json'
import humid from '../../asset/db/humid.json'
import temp from '../../asset/db/temp.json'

const humidData = {
  labels: [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ],
  datasets: [
    {
      label: 'HUMID',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(102, 151, 210, 0.4)',
      borderColor: 'rgba(102, 151, 210,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(102, 151, 210, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(102, 151, 210, 1)',
      pointHoverBorderColor: 'rgba(102, 151, 210, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: humid
    }
  ]
};

const dustData = {
  labels: [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ],
  datasets: [
    {
      label: 'DUST',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(203, 194, 176, 0.4)',
      borderColor: 'rgba(203, 194, 176, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(203, 194, 176, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(203, 194, 176, 1)',
      pointHoverBorderColor: 'rgba(203, 194, 176, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dust
    }
  ],
};

const tempData = {
  labels: [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 17 ],
  datasets: [
    {
      label: 'TEMPERATURE',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(231, 76, 60, 0.4)',
      borderColor: 'rgba(231, 76, 60, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(231, 76, 60, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(231, 76, 60, 1)',
      pointHoverBorderColor: 'rgba(231, 76, 60, 1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: temp
    }
  ]
};

const options = {
  legend: {
      display: false,
  },
}


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>
          Dashboard
          <span>훈민정음 해례본</span>
        </h1>
        <div>
          <div>
            <div>
              <h2>TEMPERATURE</h2>
              <div>
                <Line data={tempData} options={options}/>
              </div>
            </div>
            <div>
              <h2>HUMIDITY</h2>
              <div>
                <Line data={humidData} options={options}/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>DUST</h2>
              <div>
                <Line data={dustData} options={options}/>
              </div>
            </div>
            <div>
              {alert.map((item) => {
                return(
                  <Link to="/alert" className={item.type}>
                    {item.title}
                    <img src={ic_cancel} alt="cancel"/>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>NAME</div>
            <div>CONTENTS</div>
            <div>SEARCH</div>
          </div>{
            list.map((list) => {
              return(
                <div>
                  <div>{list.name}</div>
                  <div>{list.contents}</div>
                  <div>
                    <button>SEARCH</button>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}

export default Home;
