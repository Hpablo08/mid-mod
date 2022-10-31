import React, { Component } from "react";
import { postNewReservation } from "../../api";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      time: "",
      number: "",
      date: "",
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitReservation = (event) => {
    event.preventDefault(); 
    const newReservation = {
      id: Date.now(),
      ...this.state, 
    };
    this.props.addReservation(newReservation); 
    this.getData()
    // this.clearInputs(); 
   
  };
  getData= () => {
    let userData = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
    };
    postNewReservation(userData);
    console.log(userData);
     this.clearInputs();
  }

  clearInputs = () => {
    console.log('run')
    this.setState({ name: "", time: "", number: "", date: "" });
  };

  render() {
    return (
      <form className="reservation-form">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Date (mm/dd)"
          name="date"
          value={this.state.date}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Time"
          name="time"
          value={this.state.time}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type="text"
          placeholder="Number of guests"
          name="number"
          value={this.state.number}
          onChange={(event) => this.handleChange(event)}
        />
        <button onClick={(event) => this.submitReservation(event)}>
          Make Reservation
        </button>
      </form>
    );
  }
}

export default Form;
