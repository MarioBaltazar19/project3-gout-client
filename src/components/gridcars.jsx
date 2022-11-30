import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Homeartists() {
  //declare the state
  const [artists, setArtists] = useState([]);

  //function to call the API

  const getArtists = async () => {
    try {
      //process.env.REACT_APP_API_URL is referring to lcoalhost 5005 locally but will be the deplpoyed link in the future
      const storedToken = localStorage.getItem("authToken");

      //every route that is protected in  the backend needs to receive the headers object with the authorization token
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/artist/all`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setArtists(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //We need to call the function in a specific moment
  useEffect(() => {
    getArtists();
  }, []);

  return (
    <div className="artistsListPage">
      <br />

      
      
      
      <h1>Artists</h1>
      <br />

      

      {artists.slice(0, 5).map((artist) => {
        return (
          <div key={artist._id} className="artistCard card">
            <Link to={`/artists/${artist._id}`}>
              <h3>{artist.name}</h3>
              <img className="profileImg" src={artist.profileimage}></img>
              <br />
              <br />
              
              <h5><img className="spotlogo" src="https://cdn-icons-png.flaticon.com/512/3669/3669986.png" alt="" />   Followers </h5>
              {artist.followers}
              <br />
              <br />

              <h2> Next Events </h2>
            
              {artist.events.slice(0,2).map((artist) =>{
                return (
                  <h4>{artist.title}</h4>
                )
              })}

              <br />
              <br />

              
              
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Homeartists;

