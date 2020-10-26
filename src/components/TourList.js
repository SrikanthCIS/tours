import React from "react";
import Tours from "./Tours";

export default function TourList({ tours, removeTours }) {
  return (
    <div>
      {tours.map((tour) => {
        return <Tours key={tour.id} {...tour} removeTours={removeTours} />
      })}
      
    </div>
  );
}
