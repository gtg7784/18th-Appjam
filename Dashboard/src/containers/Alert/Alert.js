import React, { Component } from 'react';

import './Alert.scss';

import ic_cancel from '../../asset/ic_cancel.svg';

const alert = [
  {
    title: "습도가 높습니다.",
    type: "rainy",
    content: "온습도센서 감지 결과, 습도가 약 50%로 비정상적으로 높습니다. 제습기를 틀거나, 환기를 시켜 습도를 낮춰주세요."
  },
  {
    title: "미세먼지 수치가 높습니다.",
    type: "dust",
    content: "미세먼지센서 감지 결과, 미세먼지 수치가가 약 130으로 비정상적으로 높습니다. 환기를 시키거나 청소를 하여 먼지를 없애주세요."
  },
  {
    title: "온도가 높습니다.",
    type: "temp",
    content: "온습도센서 감지 결과, 온도가 약 30° 로 비정상적으로 높습니다. 실내 온도를 20° 이하로 낮춰주세요."
  },
]

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
