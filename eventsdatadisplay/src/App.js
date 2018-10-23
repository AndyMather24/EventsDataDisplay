import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Options from './components/Options';
class App extends Component {
  state = {
    eventsData: []
  }
  render() {
    return (
      <div className="App">
        <h1> UK EVENTS </h1>
        <Options />
      </div>
    );
  }

  componentDidMount() {
    this.fetchEvent()

  }
  fetchEvent = () => {
    axios.get(
      'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=GB&apikey=UVmjPCK68hTftDGt5ccBDLCZT6Rzyzkg'
    ).then((events => {
      this.setState({
        eventsData: events.data._embedded.events
      })
    }))
  }
  selectGenre = (selectedGenre) => {
    this.setState({
      chosenGenre: selectedGenre
    })
  }

}

export default App;
