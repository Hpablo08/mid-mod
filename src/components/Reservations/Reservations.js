import React from "react";
import "./Reservations.css";
import Card from "../Card/Card";

const Reservations = ({ reservations }) => {
  console.log(reservations)
  const reservationCards = reservations.map((reservation) => {
    return <Card 
    key={reservation.id}
    id={reservation.id}
    date={reservation.date}
    name={reservation.name}
    number={reservation.number}
    time={reservation.time}
     />;
  });
  return (
  <div className="reservation-card-container">{reservationCards}</div> )

};

export default Reservations;
