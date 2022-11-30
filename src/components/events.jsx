import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EventsList() {
  //declare the state
  const [events, setEvents] = useState([]);
  //function to call the API

  const getEvents = async () => {
    try {
      //process.env.REACT_APP_API_URL is referring to lcoalhost 5005 locally but will be the deplpoyed link in the future
      const storedToken = localStorage.getItem("authToken");

      //every route that is protected in  the backend needs to receive the headers object with the authorization token
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/event/all`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setEvents(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //We need to call the function in a specific moment
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="EventsListPage">
      <br />
      <h1>Events</h1>
      <br />
      <div className="buttonAdd">
        <Link to={`/events/create`}>
          <button type="button" class="btn btn">
            Add Event +
          </button>
        </Link>
      </div>

      {events.slice(0, 10).map((event) => {
        return (
          <div key={event._id} className="EventCard card">
            <br />
            <Link to={`/events/${event._id}`}>
              <h2>{event.title}</h2>
              <br />
              {<img src={event.image}></img>}
              {/* <img src="https://cdn.boomfestival.org/assets/files/5903/46_bf22_jakob_kolar_img_2739.1280x614.jpg"></img> */}
              <br />
              <br />
              <h4>{event.date.toLocaleString().slice(0, 10)}</h4>
              <h5>{event.location}</h5>
              {/* <h5>{event.creator}</h5> */}
              <br />
              <h6>{event.genre}</h6>
              <br />
              <h6>Artists:</h6>
              {event.artists.length && (
                <>
                  <h6>{event.artists[0].name}</h6>
                  <br />
                </>
              )}

              <h6>{event.description}</h6>
              <br />
            </Link>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default EventsList;
