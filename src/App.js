import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
var Spotify = require('spotify-web-api-js');

class App extends Component {
  componentDidMount = () => {
    var s = new Spotify();
    s.setAccessToken(
      'BQA5yTsuWkNoWcYZRiAtudulCts6p5Gj_SEU6yGaZnAnZjY_SM1dU62FV5s_5f1WcfGmsoIVMdTpYifUlrtnyT9_li8aIxJf1UtVWIB29WDGc6eLL8HywVtJF7GD7QFORoqlsQrQwm-aoNOMhMlU1eCjh3Vy1eI'
    );
    s.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    });

    // get Elvis' albums, using Promises through Promise, Q or when
    s.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
      function(data) {
        console.log('Artist albums', data);
      },
      function(err) {
        console.error(err);
      }
    );
  };
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
