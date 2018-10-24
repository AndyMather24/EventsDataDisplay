import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Options from './components/Options';
import config from './config.js';
import Events from './components/Events.jsx';
// import Pie from './components/Pie';
import { Nav } from './components/Nav.jsx';
import { Choice } from './components/Nav.jsx';


class App extends Component {
  state = {
    eventsData: [],
    chosenGenre: ''
  }
  render() {
    return (
      <div className="App">
        <h1> EVENTS </h1>
        <Nav className='Nav' data={this.state.eventsData} genre={this.state.chosenGenre} setGenre={this.setGenre} />
        {/* <Options chooseGenre={this.selectGenre} data={this.state.eventsData} /> */}
        {this.state.eventsData.length && <Events data={this.state.eventsData} choice={this.state.chosenGenre} />}
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    let g = this.state.chosenGenre;
    let first = 'https://app.ticketmaster.com/discovery/v2/events.json?keyword=';
    let last = '&apikey=UVmjPCK68hTftDGt5ccBDLCZT6Rzyzkg';
    console.log('updating')
    if (prevState.chosenGenre !== this.state.chosenGenre) {
      // get all chosen events by sending a request with a query using our choice genre??? 
      axios.get(first + g + last).then((events) => {
        this.setState({

          eventData: events
        })

      })
    }
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
  setGenre = (props) => {

    this.setState({
      chosenGenre: props
    })
  }


}

export default App;
