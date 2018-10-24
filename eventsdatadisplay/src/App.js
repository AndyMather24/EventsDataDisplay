import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Options from './components/Options';
import config from './config.js';
import Events from './components/Events.jsx';
// import Pie from './components/Pie';
import Nav from './components/Nav.jsx';

class App extends Component {
  state = {
    eventsData: [],
    chosenGenre: ''
  }
  render() {
    return (
      <div className="App">
        <h1> EVENTS </h1>
        <Nav data={this.state.eventsData}/>
        <Options chooseGenre={this.selectGenre} data={this.state.eventsData} />
        {/* <Pie /> */}
        {this.state.eventsData.length && <Events data={this.state.eventsData} choice={this.state.chosenGenre} />}
      </div>
    );
  }
  componentDidUpdate() {
    console.log('updating mate')
    axios.get({'https://app.ticketmaster.com/discovery/v2/classifications.json?keyword=&apikey=UVmjPCK68hTftDGt5ccBDLCZT6Rzyzkg'})


    
  }
  componentDidMount() {
    this.fetchGenre()

  }
  fetchGenre = () => {
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
