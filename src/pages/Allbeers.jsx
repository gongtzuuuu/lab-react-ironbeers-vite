import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Allbeers() {
  const [allBeers, setAllBeers] = useState([]);

  const fetchAllBeers = async () => {
    try {
      const response = await fetch("https://ih-beers-api2.herokuapp.com/beers");
      const parsed = await response.json();
      setAllBeers(parsed);
      console.log("parsed data", parsed);
    } catch (error) {
      console.log("Error from Allbeers", error);
    }
  };

  useEffect(() => {
    fetchAllBeers();
  }, []);

  return (
    <div>
      <h1>All Beers</h1>
      {allBeers.map((eachBeer) => {
        return (
          <NavLink to={`/${eachBeer._id}`}>
            <div key={eachBeer._id} style={{ border: " solid 1px white" }}>
              <img
                style={{ height: "150px" }}
                src={eachBeer.image_url}
                alt="Beers"
              ></img>
              <h4>{eachBeer.name}</h4>
              <p>{eachBeer.tagline}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Allbeers;
