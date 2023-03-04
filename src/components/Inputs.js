import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const [metricIsActive, setMetricIsActive] = useState(true);
  const [imperialIsActive, setImperialIsActive] = useState(false);

  const searchClickHandler = () => {
    if (city !== "") setQuery({ q: city });
    setCity("");
  };

  const locationClickHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };

  const setMetricHandler = (event) => {
    const selectedUnit = event.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit)
      setMetricIsActive(true);
      setImperialIsActive(false);
    };
  }

  const setImperialHandler = (event) => {
    const selectedUnit = event.currentTarget.name;
    if (units !== selectedUnit) {
      setUnits(selectedUnit)
      setMetricIsActive(false);
      setImperialIsActive(true);
    };
  };

  const metricColorHandler = () => {
    if(metricIsActive) {
      return "text-rose-400";
    } else {
      return "text-white";
    }
  };

  const imperialColorHandler = () => {
    if(imperialIsActive) {
      return "text-rose-400";
    } else {
      return "text-white";
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(event) => setCity(event.currentTarget.value)}
          type="text"
          placeholder="search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={searchClickHandler}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={locationClickHandler}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          autofocus="true"
          className={`text-xl font-light transition ease-out hover:scale-125 ${metricColorHandler()}`}
          onClick={setMetricHandler}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className={`text-xl font-light transition ease-out hover:scale-125 ${imperialColorHandler()}`}
          onClick={setImperialHandler}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
