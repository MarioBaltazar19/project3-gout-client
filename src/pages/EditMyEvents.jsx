import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../contexts/auth.context";

function EditMyEvents() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventGenre, setEventGenre] = useState("");
  const [eventDate, setEventDate] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const body = {
        title: eventTitle,
        date: eventDate,
        description: eventDescription,
        genre: eventGenre,
        image: eventImage,
        location: eventLocation,
        creator: user
      };

      const storedToken = localStorage.getItem("authToken");
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/event/update/${id}`, body,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      console.log(response.data)
      navigate(`/events/${response.data._id}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="createEvent">
      <br />
      <div className="createTitle">
      <h1>Edit Event</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEventTitle">
          <Form.Label>Event Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event title"
            value={eventTitle}
            onChange={(event) => setEventTitle(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEventTitle">
          <Form.Label>Event Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(event) => setEventDate(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEventGenre">
          <Form.Label>Event Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event genre"
            value={eventGenre}
            onChange={(event) => setEventGenre(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEventLocation">
          <Form.Label>Event Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event location"
            value={eventLocation}
            onChange={(event) => setEventLocation(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEventDescription">
          <Form.Label>Event Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter event description"
            value={eventDescription}
            onChange={(event) => setEventDescription(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEventImage">
          <Form.Label>Event Image</Form.Label>
          <Form.Control
            type="text" //file
            placeholder="Upload event image"
            onChange={(event) => setEventImage(event.target.value)}
          />
        </Form.Group>

        <br />
        <br />

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default EditMyEvents;