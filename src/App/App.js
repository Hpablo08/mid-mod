import React, { Component } from 'react';
import './App.css';
import { fetchAllReservations } from '../api';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: null
    }
  }
  componentDidMount = async () =>{
    try {
      const reservationList = await fetchAllReservations()
      const data = await reservationList.json()
      this.setState({reservations: data})

    } catch {
      this.setState({
        error: 'error getting reservations'
      })
      console.log(this.state.error)
    }
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
