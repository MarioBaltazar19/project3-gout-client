import { useState, useEffect, useContext } from "react";
import axios from "axios";
import EventsList from "../components/events";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth.context";
import { Link } from "react-router-dom";

function MyEvents() {
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/event/all`)
      .then((response) => {
        setAllEvents(response.data);
      })
      .then(
        setEvents(
          allEvents.filter((event) => {
            if (event.creator == user._id) {
              console.log(event.creator);
              console.log(user._id);
              return event;
            }
          })
        )
      )

      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  return (
    <div className="EventsListPageH1">
    
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
      <div className="EventsListPage">
      {events.slice(0, 10).map((event) => {
        return (
          <div key={event._id} className="EventCard card">
            <br />
            {/* <Link to={`/events/${event._id}`}> */}
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
            <h6>{event.description}</h6>
            <br />
            <Link to={`/addArtist/${event._id}`}>
              <button type="button" class="btn btn">
                Add Artist +
              </button>
            </Link>
            <br />

           
            <Link to={`/event/update/${event._id}`}>
              <button type="button" class="btn btn">
                Edit Event 
              </button>
            </Link>
            <br />


            <button
              type="button"
              class="btn btn"
              onClick={() => {
                axios
                  .delete(
                    `${process.env.REACT_APP_API_URL}/event/delete/${event._id}`
                  )
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Delete
            </button>
            {/* </Link> */}
            <br />
            <br />
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default MyEvents;
