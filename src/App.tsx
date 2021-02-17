import React, { Component } from "react";
// import logo from "./logo.svg";
import DogeLedBackground from "./doge_led_background.png";

import "./App.css";

const REQUEST_INTERVAL = 2000;
const CC_API_KEY =
  "1d7855d7e5f2f7888db6ec48fe7ec98c7bd956cc172218f6f6cac81e6f50b233";
const CC_DOGE = `https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD&api_key=${CC_API_KEY}`;

interface DogeResponse {
  USD: number;
}

type State = {
  data?: DogeResponse;
};

class App extends Component<{}, State> {
  state: State = {
    data: undefined,
  };

  task?: NodeJS.Timeout;

  componentDidMount = () => {
    this.requestData();
    this.task = setTimeout(this.requestData.bind(this), REQUEST_INTERVAL);
  };

  async requestData() {
    try {
      const response = await fetch(CC_DOGE);
      const result = await response.json();
      this.setState({ data: result });
    } catch (err) {
      console.error(err);
    }
    this.task = setTimeout(this.requestData.bind(this), REQUEST_INTERVAL);
  }

  render() {
    return (
      <div className="app" onClick={()=>{import React, { Component } from "react";
// import logo from "./logo.svg";
import DogeLedBackground from "./doge_led_background.png";

import "./App.css";

const REQUEST_INTERVAL = 30000;
const CC_API_KEY =
  "a5d6e86c6c340c7ce5818cd5d782b2a02bbc08fa06227c8a8168d6f9c4998f25";
const CC_DOGE = `https://min-api.cryptocompare.com/data/price?fsym=DOGE&tsyms=USD&api_key=${CC_API_KEY}`;

interface DogeResponse {
  USD: number;
}

type State = {
  data?: DogeResponse;
};

class App extends Component<{}, State> {
  state: State = {
    data: undefined,
  };

  task?: NodeJS.Timeout;

  componentDidMount = () => {
    this.requestData();
    this.task = setTimeout(this.requestData.bind(this), REQUEST_INTERVAL);
  };

  async requestData() {
    try {
      const response = await fetch(CC_DOGE);
      const result = await response.json();
      this.setState({ data: result });
    } catch (err) {
      console.error(err);
    }
    this.task = setTimeout(this.requestData.bind(this), REQUEST_INTERVAL);
  }

  render() {
    return (
      <div className="app" onClick={()=>{
        const e = document.documentElement
        if (e.requestFullscreen) {
          e.requestFullscreen();
          // @ts-ignore
        } else if (e.webkitRequestFullscreen) { /* Safari */
          // @ts-ignore
          e.webkitRequestFullscreen();
          // @ts-ignore
        } else if (e.msRequestFullscreen) { /* IE11 */
          // @ts-ignore
          e.msRequestFullscreen();
        }
      }}>
        <img src={DogeLedBackground} alt="" />
        <div className="doge">{this.state.data?.USD.toFixed(3)}</div>
      </div>
    );
  }
}

export default App;

        const e = document.documentElement
        if (e.requestFullscreen) {
          e.requestFullscreen();
          // @ts-ignore
        } else if (e.webkitRequestFullscreen) { /* Safari */
          // @ts-ignore
          e.webkitRequestFullscreen();
          // @ts-ignore
        } else if (e.msRequestFullscreen) { /* IE11 */
          // @ts-ignore
          e.msRequestFullscreen();
        }
      }}>
        <img src={DogeLedBackground} alt="" />
        <div className="doge">{this.state.data?.USD.toFixed(3)}</div>
      </div>
    );
  }
}

export default App;
