import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Options from './components/Options';
import config from './config.js';
import Events from './components/Events.jsx';
import Pie from './components/Pie';

class App extends Component {
  state = {
    eventsData: [],
    chosenGenre: ''
  }
  render() {
    return (
      <div className="App">
        <h1> EVENTS </h1>
        <Options chooseGenre={this.selectGenre} data={this.state.eventsData} />
        <Pie />
        {this.state.eventsData.length && <Events data={this.state.eventsData} choice={this.state.chosenGenre} />}
      </div>
    );
  }

  componentDidMount() {
    this.fetchEvent()

  }
  fetchEvent = () => {
    axios.get(
      config.api_key
    ).then((events => {
      this.setState({
        eventsData: events.data._embedded.events
      })
    }))
  }
  selectGenre = (event) => {
    this.setState({
      chosenGenre: event.target.value
    });
  };


}

export default App;
