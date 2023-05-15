import React, { useEffect, useState } from "react";

function Allbeers() {
  const [randomBeer, setRandomBeer] = useState([]);

  const fetchAllBeers = async () => {
    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      const parsed = await response.json();
      setRandomBeer(parsed);
      console.log(parsed);
      console.log("parsed data from random", parsed);
    } catch (error) {
      console.log("Error from Randombeer", error);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  return (
    <div>
      <h1>Random Beer</h1>
      <div key={randomBeer._id} style={{ border: " solid 1px white" }}>
        <img
          style={{ height: "150px" }}
          src={randomBeer.image_url}
          alt="Beers"
        ></img>
        <h4>{randomBeer.name}</h4>
        <p>{randomBeer.tagline}</p>
      </div>
    </div>
  );
}

export default Allbeers;
