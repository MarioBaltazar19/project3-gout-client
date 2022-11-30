import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [artist, setArtist] = useState(null);
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/artist/create/${id}/${search}`)
      .then((response) => {
        console.log(response.data);
        setArtist(response.data);
      });
  };

  return (
    <>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="🔎︎  Search for events or artists"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      {artist && (
        <div key={artist._id} className="artistCard card">
         <br />

          <h3>{artist.name}</h3>
          <img className="profileImg" src={artist.profileimage}></img>
          <br />
          <br />

          <h5>
            <img
              className="spotlogo"
              src="https://cdn-icons-png.flaticon.com/512/3669/3669986.png"
              alt=""
            />{" "}
            Followers{" "}
          </h5>
          {artist.followers}
          <br />
          <br />

        </div>
      )}
    </>
  );
}

export default SearchBar;
