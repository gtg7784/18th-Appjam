import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ic_cancel from '../../asset/image/ic_cancel.svg';
import './Home.scss';

import alert from '../../asset/db/alert.json'
import list from '../../asset/db/list.json'

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
            </div>
            <div>
              <h2>HUMIDITY</h2>
            </div>
          </div>
          <div>
            <div>
              <h2>FINE DUST</h2>
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
