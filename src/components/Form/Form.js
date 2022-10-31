import React, { Component } from "react";

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
    this.clearInputs(); 
  };

  clearInputs = () => {
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
