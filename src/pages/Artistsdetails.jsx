import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Player from "../components/player";

/* import SpotifyPlayer from 'react-spotify-player'; */

function ArtistsDetails() {
  //declare the state
  const [artists, setArtists] = useState(null);
  const [events, setEvents] = useState([]);
  const { id } = useParams();
  //function to call the API

  const getArtists = async () => {
    try {
      //process.env.REACT_APP_API_URL is referring to lcoalhost 5005 locally but will be the deplpoyed link in the future
      const storedToken = localStorage.getItem("authToken");

      //every route that is protected in  the backend needs to receive the headers object with the authorization token
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/artist/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setArtists(response.data);
      setEvents(response.data.events);
      console.log(response.data.events);
    } catch (error) {
      console.log(error);
    }
  };

  //We need to call the function in a specific moment
  useEffect(() => {
    getArtists();
  }, []);

  return (
    <>
      {artists && (
        <div className="artistsListPage">
          <br />
          <br />
          <br />
          {/* {artists.map((artist) => {
        return ( */}
          <div key={artists._id} className="artistCard card">
            <h3>{artists.name}</h3>
            <img className="profImg" src={artists.profileimage}></img>
            <br />
            <br />
            <h5>
              <a href={`https://open.spotify.com/artist/${artists._id}`} target="_blank"
                  rel="noopener noreferrer">
              <img
                className="spotlogo"
                src="https://cdn-icons-png.flaticon.com/512/3669/3669986.png"
                alt=""
              />{" "}
              </a>
              Followers{" "}
            </h5>
            {artists.followers}
            
            <br />
            <br />

            <h3>Genres</h3>
            <h5>{artists.genre.slice(0, 2)}</h5>
            <br />
            <br />
            {/* <h3> Genres </h3>
            {artist.genre.slice(0, 2).map((genre) => {
              return (
                <div key={genre._id} className="genreCard card">
                  <Link to={`/genre/${genre._id}`}>
                    <h3>{genre}</h3>
                  </Link>
                </div>
              );
            })} */}

            <h2>Next Events</h2>
            <br />
            {artists.genre.slice(0, 1).map((genre) => {
                  return (
                    <div key={genre._id} className="genreCard card">
                      {artists.events.slice(0, 10).map((artist) => {
                        return <h4>{artist.title}</h4>;
                      })}
                    </div>
                  );
                })}

                <br />
                <Player />
                <br />

            {/* {artist.genre.slice(0, 2).map((genre) => {
          <div key={Event._id} className="genreCard card">
            <Link to={`/genre/${genre._id}`}>
              <h3>{genre}</h3>
            </Link>
          </div>
          return (
          );
        })} */}

            {/* {
          <SpotifyPlayer
            token="BQCZ4n6LCPgA4fz-bzsslCsXU0D5LsxNpD28OVaUqD-OfUbnCe2bBj_pJj8ctfVHQ8hTWjlsGyd872Sa4R39QDxcKd05Yko9CgtFfbBo9A4yM-IEHJRQ12eWFOy_p9m-_nJ1CRtKUWpBQlWNJTdnExxNc24n2Mjfm4nl34OsVZuDdN7NxsO_2haFRkgr-ByVFv5G1twbQx9UwsfpkslOmLc-sRg"
            uris={["spotify:artist:3TVXtAsR1Inumwj472S9r4"]}
          />
        } */}

            {/* <SpotifyPlayer/> */}

            <div class=""></div>
            
          </div>

          

          {/* })} */}
        </div>
      )}
    </>
  );
}

export default ArtistsDetails;
