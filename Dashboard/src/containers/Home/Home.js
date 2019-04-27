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
                <Line data={temp} options={options}/>
              </div>
            </div>
            <div>
              <h2>HUMIDITY</h2>
              <div>
                <Line data={humid} options={options}/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2>DUST</h2>
              <div>
                <Line data={dust} options={options}/>
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
