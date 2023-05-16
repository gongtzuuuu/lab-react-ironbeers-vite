import React from "react";
import { NavLink } from "react-router-dom";

// Import images
import allBeerImg from "../assets/beers.png";
import ranBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <NavLink to="/allbeers">
        <img src={allBeerImg} alt="all beers" />
        <h3>All Beers</h3>
        <p>blablabla</p>
      </NavLink>
      <NavLink to="/randombeer">
        <img src={ranBeerImg} alt="random beer" />
        <h3>Random Beers</h3>
        <p>blablabla</p>
      </NavLink>
      <NavLink to="/newbeer">
        <img src={newBeerImg} alt="new beer" />
        <h3>New Beer</h3>
        <p>blablabla</p>
      </NavLink>
    </div>
  );
}

export default Homepage;
