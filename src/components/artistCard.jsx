/* import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SpotifyPlayer from "react-spotify-web-playback";



function ArtistsCard() {
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
    <div className="artistsCard">
      <br />

      {artists.map((artist) => {
        return (
          <div key={artist._id} className="artistCard card">
            <Link to={`/artists/${artist._id}`}>
              <h3>{artist.name}</h3>
              <img src={artist.profileimage}></img>
              <br />
              <br />
              <h5> Followers </h5>
              {artist.followers}
              <br />
              <h3> Genres </h3>
              {artist.genre.slice(0, 2).map((genre) => {
                return (
                  <div key={genre._id} className="genreCard card">
                    <Link to={`/genre/${genre._id}`}>
                      <h3>{genre}</h3>
                    </Link>
                  </div>
                );
              })}
                <br />
              <SpotifyPlayer
                token="BQAuzoI8t0NhpvusPMC5sXHUv1zIF8dPFESiOddvxd-WJat5xdzZeLrZxNSFB8Z8gJkEWbt8unuy1JkGueEQNGo28O-bcL84KFe32HF4l-GOT0rA-4fps45PRgkcIk0qMx8nJk5QoEzSs2TdahxQ-zPkKL8HR3oejNjG3525SZTi0PP_XMW5o6yyN9lPiSffLvDAM3wW4tdx-sHRUc0uAr2UDu0"
                uris={["spotify:artist:3TVXtAsR1Inumwj472S9r4"]}
              />
              <br />
                <br />  
                <br />
                
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ArtistsCard;
 */