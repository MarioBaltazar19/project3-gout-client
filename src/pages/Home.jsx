import React from "react";
import GridExample from "../components/gridcars";
import ArtistsCarousel from "../components/artistsCarousel";
import EventsList from "../components/events";
import SearchBar from "../components/searchbar";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      <div className="back">
        <br />
        <SearchBar />
        <br />
      </div>
      <ArtistsCarousel />
      <EventsList />
      
      <Link to={"/events"}>
      <div className="btnHome">
          <button type="button" class="btn btn">
             <> See All Events </>
          </button>
      </div>
        </Link>
      
      <GridExample />

      <Link to={"/artists"}>
        <div className="btnHome">
          <button type="button" class="btn btn">
             <> See All Artists </>
          </button>
        </div>
      </Link>

      <br />





    </>
  );
}
