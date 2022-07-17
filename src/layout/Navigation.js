import React from "react";

export default function Navigation() {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="py-4">Workout Tracker</h1>
      <ul className="flex">
        {/* <li className="pr-4">Exercises</li> */}
        <li>Exercises</li>
      </ul>
    </nav>
  );
}
