import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import ic_alert from '../../asset/image/ic_alert.svg'
import ic_helps from '../../asset/image/ic_helps.svg'
import ic_home from '../../asset/image/ic_home.svg'
import ic_settings from '../../asset/image/ic_settings.svg'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>CUBE</h1>

        <ul>
            <Link to='/'>
                <li>
                    <img src={ic_home} alt="Home"/>
                    Home
                </li>
            </Link>
            <Link to='/alert'>
                <li>
                    <img src={ic_alert} alt="ALERT"/>
                    ALERT
                </li>
            </Link>
            <Link to='/helps'>
                <li>
                    <img src={ic_helps} alt="HELPS"/>
                    HELPS
                </li>
            </Link>
            <Link to='/settings'>
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
