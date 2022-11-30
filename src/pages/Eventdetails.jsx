import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import SearchBar from '../components/searchbar';

function EventDetails() {
  const [Event, setEvent] = useState(null);

  const { id } = useParams();
  //this function retrieves the Event from the API
  const getEvent = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/event/${id}`);

      setEvent(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvent();
    //If we were able to go from one details view straight to another we should pass id on the dependency array, so that everytime the component rerenders we get the information from the correct/latest id
  }, []);

  return (
    <SearchBar/>,

    <div className="EventCard card">
      {Event && (
        /* React fragment - doesn't add anything to the html (only its contents) */
        <>
        <br/><br/>
        <img src={Event.image} alt={Event.title} />
          <h1>{Event.title}</h1>
          <p>{Event.location}</p>
          <p>{Event.genre}</p>
          <p>{Event.description}</p>
          {Event.artists.lenght && (
          <p>{Event.artists[0].name}</p>)}
   

      

        <br />

    
        <Link to={`/addArtist/${Event._id}`}>
        <button type="button" className="btn btn-primary">Add Artist + </button>
        </Link>
        <br />     </>
      )}
    </div>
  );
}

export default EventDetails;














