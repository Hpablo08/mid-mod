import React, { Component } from 'react';
import './App.css';
import { fetchAllReservations } from '../api';
import Reservations from '../components/Reservations/Reservations';
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
      this.setState({ reservations: data });

    } catch {
      this.setState({
        error: 'error getting reservations'
      })
      console.log(this.state.error)
    }
  }
  render() {   
 if (!this.state.reservations) {
   return <h2 className="error-message">{this.state.error}</h2>;
 }
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
