import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">{formatToLocalTime(dt, timezone)}</p>
      </div>
      <hr className="w-full h-px my-1 bg-white-600"/>
      <div className="flex flex-col items-center justify-center my-3">
        <p className="text-gray-700 text-3xl mb-2">Current Conditions</p>

        <p className="text-white text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
