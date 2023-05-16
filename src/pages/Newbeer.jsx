/* {
		"name": "Eric",
		"occupation": "Dungeon Master",
		"debt": true,
		"weapon": "The Mighty Pen"
	} */

import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Newbeer() {
  //const navigate = useNavigate();

  const [newBeer, setNewBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
    _id: "",
  });

  const handleChange = (event) => {
    setNewBeer((prevInput) => {
      const currentTarget = event.target.name;
      let currentValue = event.target.value;

      //console.log("currentTarget", currentTarget);
      //console.log("currentValue", currentValue); // Handle

      return { ...prevInput, [currentTarget]: currentValue };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if the event does not get explicitly handled, its default action should not be taken as it normally would be.
    console.log("Successfully submit!");
    const newBeerDetail = { ...Newbeer, _id: uuidv4() };

    try {
      const response = await fetch(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBeerDetail),
        }
      );
      console.log("response", response);
      const theNewBeer = await response.json();
      console.log("theNewBeer", theNewBeer);
      Navigate(`/${theNewBeer._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add New Beer</h1>
      <form
        style={{ display: "grid", gridTemplate: "repeat(5, 1fr) / auto" }}
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input value={newBeer.name} name="name" onChange={handleChange} />
        </label>
        <label>
          Tagline:
          <input
            value={newBeer.tagline}
            name="tagline"
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="textarea"
            name="description"
            value={newBeer.description}
            onChange={handleChange}
          />
        </label>
        <label>
          First brewed:
          <input
            value={newBeer.first_brewed}
            name="first_brewed"
            onChange={handleChange}
          />
        </label>
        <label>
          Brewer tips:
          <input
            value={newBeer.brewers_tips}
            name="brewers_tips"
            onChange={handleChange}
          />
        </label>
        <label>
          Attenuation level:
          <input
            value={newBeer.attenuation_level}
            name="attenuation_level"
            onChange={handleChange}
          />
        </label>
        <label>
          Contributed by:
          <input
            value={newBeer.contributed_by}
            name="contributed_by"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add New Beer</button>
      </form>
    </>
  );
}

export default Newbeer;
