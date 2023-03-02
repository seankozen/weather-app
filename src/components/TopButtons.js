import React from "react";

export default function TopButtons() {
  const cities = [
    { id: 1, title: "Tokyo" },
    { id: 2, title: "Sydney" },
    { id: 3, title: "San Francisco" },
    { id: 4, title: "New York" },
    { id: 5, title: "London" },
  ];

  return <div className="flex items-center justify-around my-6">
    {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
    ))}
  </div>;
}
