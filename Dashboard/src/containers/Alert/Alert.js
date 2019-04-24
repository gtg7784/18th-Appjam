import React, { Component } from 'react';

import './Alert.scss';
import alert from '../../asset/db/alert.json'

import ic_cancel from '../../asset/image/ic_cancel.svg';

class Alert extends Component {
  render() {
    return (
      <div className="Alert">
        <h1>
          Alert
          <span>훈민정음 해례본</span>
        </h1>
        <div>
          {alert.map((item) => {
            return(
              <div className={item.type}>
                <h2>
                  {item.title}
                  <img src={ic_cancel} alt="cancel"/>
                </h2>
                <span>{item.content}</span>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Alert;
