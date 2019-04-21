import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import ic_alert from '../../asset/ic_alert.svg'
import ic_helps from '../../asset/ic_helps.svg'
import ic_home from '../../asset/ic_home.svg'
import ic_settings from '../../asset/ic_settings.svg'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>CUBE</h1>

        <ul>
            <Link>
                <li>
                    <img src={ic_home} alt="Home"/>
                    Home
                </li>
            </Link>
            <Link>
                <li>
                    <img src={ic_alert} alt="ALERT"/>
                    ALERT
                </li>
            </Link>
            <Link>
                <li>
                    <img src={ic_helps} alt="HELPS"/>
                    HELPS
                </li>
            </Link>
            <Link>
                <li>
                    <img src={ic_settings} alt="SETTINGS"/>
                    SETTINGS
                </li>
            </Link>
        </ul>
      </div>
    );
  }
}

export default Header;