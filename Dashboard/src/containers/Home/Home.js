import React, { Component } from 'react';

import ic_cancel from '../../asset/ic_cancel.svg';
import './Home.scss';

const alert = [
  {
    contents: "비가 내리고  있어요, 습도에 주의하세요.",
    type: "rainy"
  },
  {
    contents: "미세먼지가 심한 날이에요, 먼지에 주의하세요.",
    type: "dust"
  },
  {
    contents: "더운 날이에요, 온도에 주의하세요.",
    type: "temp"
  },
]

const list = [
  {
    name: "훈민정음 해례본",
    contents: "현재 배OO씨가 소유 중인 훈민정음 해례본"
  },
  {
    name: "금동미륵보살반가사유상",
    contents: "현재 삼성에서 소유 중인 국보 제118호"
  }
]

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
                  <div className={item.type}>
                    {item.contents}
                    <img src={ic_cancel} alt="cancel"/>
                  </div>
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
