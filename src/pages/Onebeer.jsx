import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function Onebeer() {
  const [oneBeer, setOneBeer] = useState([]);

  const { id } = useParams();
  console.log("Beer Id: ", id);

  const fetchOneBeer = async () => {
    try {
      const response = await fetch(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      const parsed = await response.json();
      setOneBeer(parsed);
      console.log(parsed);
      console.log("parsed data from random", parsed);
    } catch (error) {
      console.log("Error from Randombeer", error);
    }
  };

  useEffect(() => {
    fetchOneBeer();
  }, []);

  return (
    <div>
      <h1>One Beer</h1>
      <div key={oneBeer._id} style={{ border: " solid 1px white" }}>
        <img
          style={{ height: "150px" }}
          src={oneBeer.image_url}
          alt="Beers"
        ></img>
        <h4>{oneBeer.name}</h4>
        <p>{oneBeer.tagline}</p>
        <NavLink to="/allbeers">Back</NavLink>
      </div>
    </div>
  );
}

export default Onebeer;
