import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/searchbar";
import EventsList from "../components/events";


function EventsDetails() {
  

  return (
    <SearchBar />,
    <EventsList/>
  );
}


export default EventsDetails;
